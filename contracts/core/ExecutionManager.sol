// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../common/Authority.sol";

abstract contract ExecutionManager is Authority {
    error WrongArrayLength();

    function execute(address dest, uint256 value, bytes calldata func) external onlyEntryPoint {
        _call(dest, value, func);
    }

    function executeBatch(address[] calldata dest, uint256[] calldata value, bytes[] calldata func)
        external
        onlyEntryPoint
    {
        if (dest.length != func.length || (value.length != 0 && value.length != func.length)) {
            revert WrongArrayLength();
        }
        if (value.length == 0) {
            for (uint256 i = 0; i < dest.length;) {
                _call(dest[i], 0, func[i]);
                unchecked {
                    i++;
                }
            }
        } else {
            for (uint256 i = 0; i < dest.length;) {
                _call(dest[i], value[i], func[i]);
                unchecked {
                    i++;
                }
            }
        }
    }

    function _call(address target, uint256 value, bytes memory data) internal {
        (bool success, bytes memory result) = target.call{value: value}(data);
        if (!success) {
            assembly {
                revert(add(result, 32), mload(result))
            }
        }
    }
}
