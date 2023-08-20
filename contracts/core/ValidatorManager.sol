// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../common/Authority.sol";
import "../common/Contants.sol";
import "../libraries/LinkedAddressList.sol";
import "../interfaces/IValidator.sol";

abstract contract ValidatorManager is Authority {
    error ErrorValidator(address);

    using LinkedAddressList for mapping(address => address);

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
        return validators.page(start, pageSize);
    }

    function _enableValidator(address validator, bytes calldata data) internal {
        validators.add(validator);
        IValidator(validator).enable(data);
        emit EnabledValidator(validator);
    }

    function enableValidator(address validator, bytes calldata data) external onlySelf {
        _enableValidator(validator, data);
    }

    function disableValidator(address prevValidator, address validator) external onlySelf {
        validators.remove(prevValidator, validator);
        emit DisabledValidator(validator);
    }

    function isValidatorEnabled(address validator) public view returns (bool) {
        return validators.contains(validator);
    }

    function _setupValidators() internal {
        validators.setup();
    }
}
