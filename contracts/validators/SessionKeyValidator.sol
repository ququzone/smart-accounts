// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

import "../interfaces/IValidator.sol";
import "../common/MerkleProofLib.sol";
import "../common/Contants.sol";
import "../common/Structs.sol";
import "../common/Helpers.sol";

contract SessionKeyValidator is IValidator {
    string public constant override NAME = "Session Key Validator";
    string public constant override VERSION = "0.0.1";

    event OwnerChanged(address indexed account, address indexed oldOwner, address indexed newOwner);

    mapping(address sessionKey => mapping(address kernel => SessionData)) public sessionData;

    function validateSignature(address, bytes32, bytes calldata)
        external
        payable
        override
        returns (uint256)
    {
        revert("SessionKeyValidator: not implemented");
    }

    function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256)
        external
        payable
        returns (uint256)
    {
        // userOp.signature = signer + signature + permission + merkleProof
        address sessionKey = address(bytes20(userOp.signature[0:20]));
        bytes calldata signature = userOp.signature[20:85];
        SessionData storage session = sessionData[sessionKey][msg.sender];
        require(session.enabled, "SessionKeyValidator: session key not enabled");
        if (session.merkleRoot == bytes32(0)) {
            // sessionKey allowed to execute any tx
            return _packValidationData(false, session.validUntil, session.validAfter);
        }
        if (session.paymaster == address(1)) {
            require(userOp.paymasterAndData.length != 0, "SessionKeyValidator: paymaster not set");
        } else if (session.paymaster != address(0)) {
            require(
                address(bytes20(userOp.paymasterAndData[0:20])) == session.paymaster,
                "SessionKeyValidator: paymaster mismatch"
            );
        }

        (Permission memory permission, bytes32[] memory merkleProof) =
            abi.decode(userOp.signature[85:], (Permission, bytes32[]));
        require(permission.target == address(0) || address(bytes20(userOp.callData[16:36])) == permission.target, "SessionKeyValidator: target mismatch");
        require(
            uint256(bytes32(userOp.callData[36:68])) <= permission.valueLimit,
            "SessionKeyValidator: value limit exceeded"
        );
        require(
            Operation(uint8(uint256(bytes32(userOp.callData[100:132])))) == permission.operation,
            "SessionKeyValidator: operation mismatch"
        );

        uint256 dataOffset = uint256(bytes32(userOp.callData[68:100])) + 4; // adding 4 for msg.sig
        uint256 dataLength = uint256(bytes32(userOp.callData[dataOffset:dataOffset + 32]));
        bytes calldata data = userOp.callData[dataOffset + 32:dataOffset + 32 + dataLength];
        require(bytes4(data[0:4]) == permission.sig, "SessionKeyValidator: sig mismatch");
        for (uint256 i = 0; i < permission.rules.length; i++) {
            ParamRule memory rule = permission.rules[i];
            bytes32 param = bytes32(data[4 + rule.offset:4 + rule.offset + 32]);
            if (rule.condition == ParamCondition.EQUAL) {
                require(param == rule.param, "SessionKeyValidator: param mismatch");
            } else if (rule.condition == ParamCondition.GREATER_THAN) {
                require(param > rule.param, "SessionKeyValidator: param mismatch");
            } else if (rule.condition == ParamCondition.LESS_THAN) {
                require(param < rule.param, "SessionKeyValidator: param mismatch");
            } else if (rule.condition == ParamCondition.GREATER_THAN_OR_EQUAL) {
                require(param >= rule.param, "SessionKeyValidator: param mismatch");
            } else if (rule.condition == ParamCondition.LESS_THAN_OR_EQUAL) {
                require(param <= rule.param, "SessionKeyValidator: param mismatch");
            } else if (rule.condition == ParamCondition.NOT_EQUAL) {
                require(param != rule.param, "SessionKeyValidator: param mismatch");
            }
        }
        bool result = MerkleProofLib.verify(merkleProof, session.merkleRoot, keccak256(abi.encode(permission)))
            && (sessionKey == ECDSA.recover(ECDSA.toEthSignedMessageHash(userOpHash), signature));
        return _packValidationData(!result, session.validUntil, session.validAfter);
    }

    function enable(bytes calldata data) external override {
        address sessionKey = address(bytes20(data[0:20]));
        bytes32 merkleRoot = bytes32(data[20:52]);
        uint48 validAfter = uint48(bytes6(data[52:58]));
        uint48 validUntil = uint48(bytes6(data[58:64]));
        address paymaster = address(bytes20(data[64:84]));
        sessionData[sessionKey][msg.sender] = SessionData(merkleRoot, validAfter, validUntil, paymaster, true);
    }
}
