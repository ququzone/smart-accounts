// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {UserOperation} from "@account-abstraction/contracts/interfaces/UserOperation.sol";
import "./Metadata.sol";

interface IValidator is Metadata {
    function validateSignature(
        UserOperation calldata userOp,
        bytes32 userOpHash,
        bytes calldata signature
    ) external payable returns (uint256 validationData);

    function validCaller(address caller, bytes calldata data) external view returns (bool);

    function enable(bytes calldata data) external payable;
}
