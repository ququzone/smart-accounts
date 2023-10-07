// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../../common/Contants.sol";
import "../BaseValidator.sol";
import "./ISecp256r1.sol";
import "./Base64.sol";

contract P256Validator is BaseValidator {
    string public constant override NAME = "P256 Validator";
    string public constant override VERSION = "0.0.1";

    event PkChanged(address indexed account, bytes oldPk, bytes newPk);

    ISecp256r1 public immutable impl;
    mapping(address => bytes) public pks;

    constructor(ISecp256r1 _impl) {
        impl = _impl;
    }

    function validateSignature(address account, bytes32 userOpHash, bytes calldata signature)
        external
        payable
        override
        returns (uint256 validationData)
    {
        bytes memory sig;
        bytes32 messageHash;
        {
            (
                bytes memory realSig,
                bytes memory authenticatorData,
                string memory clientDataJSONPre,
                string memory clientDataJSONPost
            ) = abi.decode(signature, (bytes, bytes, string, string));

            string memory clientDataJSON =
                string.concat(clientDataJSONPre, Base64.encode(bytes.concat(userOpHash)), clientDataJSONPost);
            bytes32 clientDataHash = sha256(bytes(clientDataJSON));
            messageHash = sha256(bytes.concat(authenticatorData, clientDataHash));
            sig = realSig;
        }

        if (impl.validateSignature(messageHash, sig, pks[account])) {
            return 0;
        }
        return Contants.SIG_VALIDATION_FAILED;
    }

    function enable(bytes calldata data) external payable override {
        bytes memory old = pks[msg.sender];
        pks[msg.sender] = data;
        emit PkChanged(msg.sender, old, data);
    }

    function validCaller(address, bytes calldata) external pure override returns (bool) {
        revert("not implemented");
    }
}
