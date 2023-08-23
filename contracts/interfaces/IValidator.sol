// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@account-abstraction/contracts/interfaces/UserOperation.sol";
import "./Metadata.sol";


interface IValidator is Metadata {
    function validateSignature(address account, bytes32 userOpHash, bytes calldata signature)
        external
        payable
        returns (uint256 validationData);

    function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256 missingFunds)
        external
        payable
        returns (uint256);

    function enable(bytes calldata data) external;
}
