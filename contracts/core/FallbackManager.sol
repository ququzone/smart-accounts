// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../common/Authority.sol";

abstract contract FallbackManager is Authority {
    error AddressCannotBeZero();

    // keccak-256 hash of "fallback_manager.handler.address" subtracted by 1
    bytes32 internal constant FALLBACK_HANDLER_STORAGE_SLOT =
        0x6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d4;

    event ChangedFallbackHandler(address indexed previousHandler, address indexed handler);

    fallback() external {
        bytes32 slot = FALLBACK_HANDLER_STORAGE_SLOT;
        assembly {
            let handler := sload(slot)
            if iszero(handler) { return(0, 0) }
            calldatacopy(0, 0, calldatasize())
            // The msg.sender address is shifted to the left by 12 bytes to remove the padding
            // Then the address without padding is stored right after the calldata
            mstore(calldatasize(), shl(96, caller()))
            // Add 20 bytes for the address appended add the end
            let success := call(gas(), handler, 0, 0, add(calldatasize(), 20), 0, 0)
            returndatacopy(0, 0, returndatasize())
            if iszero(success) { revert(0, returndatasize()) }
            return(0, returndatasize())
        }
    }

    function getFallbackHandler() external view returns (address _handler) {
        assembly {
            _handler := sload(FALLBACK_HANDLER_STORAGE_SLOT)
        }
    }

    function setFallbackHandler(address handler) public onlySelf {
        address previousHandler;
        assembly {
            previousHandler := sload(FALLBACK_HANDLER_STORAGE_SLOT)
        }
        _setFallbackHandler(handler);
        emit ChangedFallbackHandler(previousHandler, handler);
    }

    function _setFallbackHandler(address handler) internal {
        if (handler == address(0)) revert AddressCannotBeZero();
        bytes32 slot = FALLBACK_HANDLER_STORAGE_SLOT;
        assembly {
            sstore(slot, handler)
        }
    }
}
