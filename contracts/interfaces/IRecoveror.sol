// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "./Metadata.sol";

interface IRecoveror is Metadata {
    function recover(bytes calldata proof, address validator, bytes calldata data) external;

    function bind(bytes calldata data) external;
}
