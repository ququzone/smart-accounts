// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../../interfaces/IValidator.sol";
import "../../common/Contants.sol";
import "./ISecp256r1.sol";

contract P256Validator is IValidator {
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
        if (impl.validateSignature(sha256(abi.encode(userOpHash)), signature, pks[account])) {
            return 0;
        }
        return Contants.SIG_VALIDATION_FAILED;
    }

    function enable(bytes calldata data) external override {
        pks[msg.sender] = data;
        bytes memory old = pks[msg.sender];
        emit PkChanged(msg.sender, old, data);
    }
}
