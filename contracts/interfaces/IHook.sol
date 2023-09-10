// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "./Metadata.sol";

enum HookType {
    Pre,
    Post,
    Both
}

interface IHook is Metadata {
    function hookType() external view returns (HookType);

    function install(bytes memory data) external;

    function uninstall() external;

    function beforeTransaction(address to, uint256 value, bytes memory data) external;

    function afterTransaction(address to, uint256 value, bytes memory data) external;
}
