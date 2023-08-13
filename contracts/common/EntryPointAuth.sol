// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@account-abstraction/contracts/interfaces/IEntryPoint.sol";

abstract contract EntryPointAuth {
    error CallerNotEntryPoint();

    function _entryPoint() internal view virtual returns (IEntryPoint);

    modifier onlyEntryPoint() {
        if (msg.sender != address(_entryPoint())) {
            revert CallerNotEntryPoint();
        }
        _;
    }
}
