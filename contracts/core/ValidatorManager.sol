// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../common/Authority.sol";
import "../common/Contants.sol";
import "../interfaces/IValidator.sol";

abstract contract ValidatorManager is Authority {
    error ValidatorCannotBeZeroOrSentinel(address validator);
    error ValidatorAlreadyEnabled(address validator);
    error ValidatorAndPrevValidatorMismatch(address expectedValidator, address returnedValidator, address prevValidator);

    event EnabledValidator(address validator);
    event DisabledValidator(address validator);

    mapping(address => address) internal validators;

    function getValidatorsPaginated(address start, uint256 pageSize)
        external
        view
        returns (address[] memory array, address next)
    {
        array = new address[](pageSize);

        uint256 count;
        address current = validators[start];
        while (current != address(0x0) && current != Contants.SENTINEL && count < pageSize) {
            array[count] = current;
            current = validators[current];
            count++;
        }
        next = current;
        assembly {
            mstore(array, count)
        }
    }

    function _enableValidator(address validator, bytes calldata data) internal {
        if (validator == address(0) || validator == Contants.SENTINEL) {
            revert ValidatorCannotBeZeroOrSentinel(validator);
        }
        if (validators[validator] != address(0)) revert ValidatorAlreadyEnabled(validator);
        validators[validator] = validators[Contants.SENTINEL];
        validators[Contants.SENTINEL] = validator;
        IValidator(validator).enable(data);
        emit EnabledValidator(validator);
    }

    function enableValidator(address validator, bytes calldata data) external onlySelf {
        _enableValidator(validator, data);
    }

    function disableModule(address prevValidator, address validator) external onlySelf {
        if (validator == address(0) || validator == Contants.SENTINEL) {
            revert ValidatorCannotBeZeroOrSentinel(validator);
        }
        if (validators[prevValidator] != validator) {
            revert ValidatorAndPrevValidatorMismatch(validator, validators[prevValidator], prevValidator);
        }
        validators[prevValidator] = validators[validator];
        delete validators[validator];
        emit DisabledValidator(validator);
    }

    function isValidatorEnabled(address validator) public view returns (bool) {
        return Contants.SENTINEL != validator && validators[validator] != address(0);
    }

    function _setupValidators() internal {
        validators[Contants.SENTINEL] = Contants.SENTINEL;
    }
}
