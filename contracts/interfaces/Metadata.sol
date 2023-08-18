// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

interface Metadata {
    function NAME() external view returns (string memory);
    function VERSION() external view returns (string memory);
}
