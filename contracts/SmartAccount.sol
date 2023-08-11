// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@account-abstraction/contracts/core/BaseAccount.sol";

import "./core/AuthManager.sol";

contract SmartAccount is BaseAccount, UUPSUpgradeable, Initializable, AuthManager {
    constructor(IEntryPoint _EntryPoint) AuthManager(_EntryPoint) {
        _disableInitializers();
    }

    function entryPoint() public view virtual override returns (IEntryPoint) {
        return _entryPoint();
    }

    function _validateSignature(UserOperation calldata userOp, bytes32 userOpHash)
        internal
        virtual
        override
        returns (uint256 validationData)
    {}

    function _authorizeUpgrade(address newImplementation) internal virtual override onlyEntryPoint {}
}
