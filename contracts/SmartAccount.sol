// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@account-abstraction/contracts/core/BaseAccount.sol";

import "./core/EntryPointManager.sol";
import "./core/ExecutionManager.sol";
import "./core/FallbackManager.sol";
import "./core/ValidatorManager.sol";

contract SmartAccount is
    BaseAccount,
    Initializable,
    EntryPointManager,
    ExecutionManager,
    FallbackManager,
    ValidatorManager
{
    constructor(IEntryPoint _EntryPoint) EntryPointManager(_EntryPoint) {
        _disableInitializers();
    }

    function initialize(address defalutCallbackHandler, address[] calldata validators, bytes[] calldata data)
        external
        initializer
    {
        if (validators.length != data.length) {
            revert WrongArrayLength();
        }
        _setFallbackHandler(defalutCallbackHandler);
        _setupValidators();
        for (uint256 i = 0; i < validators.length;) {
            _enableValidator(validators[i], data[i]);
            unchecked {
                i++;
            }
        }
    }

    function entryPoint() public view virtual override returns (IEntryPoint) {
        return _entryPoint();
    }

    function _validateSignature(UserOperation calldata userOp, bytes32 userOpHash)
        internal
        virtual
        override
        returns (uint256 validationData)
    {
        (address validator, bytes memory signature) = abi.decode(userOp.signature, (address, bytes));

        if (!isValidatorEnabled(validator)) {
            return SIG_VALIDATION_FAILED;
        }
        return IValidator(validator).validateSignature(userOp.sender, userOpHash, signature);
    }

    function getDeposit() public view returns (uint256) {
        return entryPoint().balanceOf(address(this));
    }

    function addDeposit() public payable {
        entryPoint().depositTo{value: msg.value}(address(this));
    }

    function withdrawDepositTo(address payable withdrawAddress, uint256 amount) public onlySelf {
        entryPoint().withdrawTo(withdrawAddress, amount);
    }
}
