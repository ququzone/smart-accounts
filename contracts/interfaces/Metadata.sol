// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

interface Metadata is IERC165 {
    function NAME() external view returns (string memory);
    function VERSION() external view returns (string memory);
}
