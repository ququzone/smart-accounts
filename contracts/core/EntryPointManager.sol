// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@account-abstraction/contracts/interfaces/IEntryPoint.sol";
import "../common/EntryPointAuth.sol";

abstract contract EntryPointManager is EntryPointAuth {
    IEntryPoint private immutable _ep;

    constructor(IEntryPoint anEntryPoint) {
        _ep = anEntryPoint;
    }

    function _entryPoint() internal view virtual override returns (IEntryPoint) {
        return _ep;
    }
}
