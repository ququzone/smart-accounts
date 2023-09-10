// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../interfaces/IValidator.sol";

abstract contract BaseValidator is IValidator {
    function supportsInterface(bytes4 interfaceId) external pure returns (bool) {
        return interfaceId == type(IValidator).interfaceId;
    }
}
