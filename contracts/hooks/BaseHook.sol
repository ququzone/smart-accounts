// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../interfaces/IHook.sol";

abstract contract BaseHook is IHook {
    function supportsInterface(bytes4 interfaceId) external pure returns (bool) {
        return interfaceId == type(IHook).interfaceId;
    }
}
