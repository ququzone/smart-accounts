// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@account-abstraction/contracts/core/EntryPoint.sol";

import "../../../contracts/SmartAccountFactory.sol";

contract AccountInstence {
    SmartAccountFactory public accountFactory;
    SmartAccount public account;
    EntryPoint public entryPoint;

    constructor(address defaultCallbackHandler, address[] memory validators, bytes[] memory data, uint256 salt) {
        entryPoint = new EntryPoint();
        accountFactory = new SmartAccountFactory(entryPoint, defaultCallbackHandler);

        account = accountFactory.createAccount(validators, data, salt);
        address accountAddress = accountFactory.getAddress(validators, data, salt);
        require(address(account) == accountAddress, "walletAddress isn't query address");
        require(accountAddress.code.length > 0, "wallet code is empty");
    }
}
