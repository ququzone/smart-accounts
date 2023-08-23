// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "forge-std/Test.sol";

import "../../contracts/handler/DefaultCallbackHandler.sol";
import "../../contracts/validators/ECDSAValidator.sol";
import "./base/AccountInstance.sol";

contract CreateAccountTest is Test {
    address public accountOwner;
    uint256 public accountOwnerPrivateKey;
    AccountInstance public accountInstance;

    function setUp() public {
        (accountOwner, accountOwnerPrivateKey) = makeAddrAndKey("owner");
    }

    function test_Create() public {
        DefaultCallbackHandler handler = new DefaultCallbackHandler();
        ECDSAValidator validator = new ECDSAValidator();

        address[] memory _validators = new address[](1);
        _validators[0] = address(validator);
        bytes[] memory _data = new bytes[](1);
        _data[0] = abi.encodePacked(accountOwner);
        accountInstance = new AccountInstance(address(handler), _validators, _data, 0);

        SmartAccount account = accountInstance.account();

        (address[] memory validators, address next) = account.getValidatorsPaginated(Contants.SENTINEL, 5);
        assertEq(validators.length, 1);
        assertEq(validators[0], address(validator));
        assertEq(next, Contants.SENTINEL);
        assertEq(accountOwner, validator.owner(address(account)));
    }
}
