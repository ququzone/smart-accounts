// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {UserOperation} from "@account-abstraction/contracts/interfaces/UserOperation.sol";

interface IValidator {
    function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash)
        external
        payable
        returns (uint256 validationData);

    function setup(bytes calldata data) external;
}
