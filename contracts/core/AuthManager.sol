// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@account-abstraction/contracts/interfaces/IEntryPoint.sol";

abstract contract AuthManager {
    error CallerNotEntryPoint();

    IEntryPoint private immutable _ep;

    constructor(IEntryPoint anEntryPoint) {
        _ep = anEntryPoint;
    }

    function _entryPoint() internal view virtual returns (IEntryPoint) {
        return _ep;
    }

    modifier onlyEntryPoint() {
        if (msg.sender != address(_entryPoint())) {
            revert CallerNotEntryPoint();
        }
        _;
    }
}
