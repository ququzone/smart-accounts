// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../../interfaces/IValidator.sol";

contract P256Validator is IValidator {
    string public constant override NAME = "P256 Validator";
    string public constant override VERSION = "0.0.1";

    function validateSignature(address account, bytes32 userOpHash, bytes calldata signature)
        external
        payable
        override
        returns (uint256 validationData)
    {}

    function enable(bytes calldata data) external override {}
}
