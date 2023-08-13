// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "./EntryPointAuth.sol";

abstract contract Authority is EntryPointAuth {
    error CallerNotSelf();

    modifier onlySelf() {
        if (msg.sender != address(this)) {
            revert CallerNotSelf();
        }
        _;
    }
}
