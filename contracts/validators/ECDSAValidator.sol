// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

import "../interfaces/IValidator.sol";
import "../common/Contants.sol";

contract ECDSAValidator is IValidator {
    string public constant override NAME = "ECDSA Validator";
    string public constant override VERSION = "0.0.1";

    event OwnerChanged(address indexed account, address indexed oldOwner, address indexed newOwner);

    mapping(address => address) public owner;

    function validateSignature(address account, bytes32 userOpHash, bytes calldata signature)
        external
        payable
        override
        returns (uint256 validationData)
    {
        address _owner = owner[account];
        bytes32 hash = ECDSA.toEthSignedMessageHash(userOpHash);
        if (_owner != ECDSA.recover(hash, signature)) {
            return Contants.SIG_VALIDATION_FAILED;
        }
        return 0;
    }

    function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256)
        external
        payable
        returns (uint256) 
    {
        address _owner = owner[userOp.sender];
        bytes32 hash = ECDSA.toEthSignedMessageHash(userOpHash);
        if (_owner != ECDSA.recover(hash, userOp.signature)) {
            return Contants.SIG_VALIDATION_FAILED;
        }
        return 0;
    }

    function enable(bytes calldata data) external override {
        address _owner = address(bytes20(data[0:20]));
        address oldOwner = owner[msg.sender];
        owner[msg.sender] = _owner;
        emit OwnerChanged(msg.sender, oldOwner, _owner);
    }
}
