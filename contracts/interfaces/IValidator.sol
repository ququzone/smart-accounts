// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

interface IValidator {
    function validateSignature(bytes32 userOpHash, bytes calldata signature)
        external
        payable
        returns (uint256 validationData);

    function setup(bytes calldata data) external;
}
