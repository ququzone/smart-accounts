// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

interface IValidator {
    function validateSignature(address account, bytes32 userOpHash, bytes calldata signature)
        external
        payable
        returns (uint256 validationData);

    function enable(bytes calldata data) external;
}
