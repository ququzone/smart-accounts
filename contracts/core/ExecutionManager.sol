// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../common/Authority.sol";
import "../interfaces/IHook.sol";
import "../libraries/LinkedAddressList.sol";

abstract contract ExecutionManager is Authority {
    using LinkedAddressList for mapping(address => address);

    error WrongArrayLength();
    error InvalidHook();

    event InstalledHook(address indexed hook);
    event UninstalledHook(address indexed hook);

    mapping(address => address) internal beforeHooks;
    mapping(address => address) internal afterHooks;

    function addHook(address hook, bytes calldata data) external onlySelf {
        IHook _hook = IHook(hook);
        if (!IHook(hook).supportsInterface(type(IHook).interfaceId)) {
            revert InvalidHook();
        }

        if (_hook.hookType() == HookType.Pre) {
            beforeHooks.add(hook);
        } else if (_hook.hookType() == HookType.Post) {
            afterHooks.add(hook);
        } else {
            beforeHooks.add(hook);
            afterHooks.add(hook);
        }
        _hook.install(data);

        emit InstalledHook(hook);
    }

    function removeHook(address prevBeforeHook, address prevAfterHook, address hook) external onlySelf {
        IHook _hook = IHook(hook);

        if (_hook.hookType() == HookType.Pre) {
            beforeHooks.remove(prevBeforeHook, hook);
        } else if (_hook.hookType() == HookType.Post) {
            afterHooks.remove(prevAfterHook, hook);
        } else {
            beforeHooks.remove(prevBeforeHook, hook);
            afterHooks.remove(prevAfterHook, hook);
        }
        _hook.uninstall();

        emit UninstalledHook(hook);
    }

    function sudo(address dest, uint256 value, bytes calldata func) external onlyEntryPoint {
        _call(dest, value, func);
    }

    function execute(address dest, uint256 value, bytes calldata func) external onlyEntryPoint {
        _execute(dest, value, func);
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
                _execute(dest[i], 0, func[i]);
                unchecked {
                    i++;
                }
            }
        } else {
            for (uint256 i = 0; i < dest.length;) {
                _execute(dest[i], value[i], func[i]);
                unchecked {
                    i++;
                }
            }
        }
    }

    function _execute(address target, uint256 value, bytes memory data) internal {
        address addr = beforeHooks[LinkedAddressList.SENTINEL];
        while (uint160(addr) > LinkedAddressList.SENTINEL_UINT) {
            IHook(addr).afterTransaction(target, value, data);
            addr = beforeHooks[addr];
        }

        _call(target, value, data);

        addr = afterHooks[LinkedAddressList.SENTINEL];
        while (uint160(addr) > LinkedAddressList.SENTINEL_UINT) {
            IHook(addr).afterTransaction(target, value, data);
            addr = afterHooks[addr];
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
