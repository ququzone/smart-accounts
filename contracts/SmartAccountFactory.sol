// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/utils/Create2.sol";
import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

import "./handler/DefaultCallbackHandler.sol";
import "./SmartAccount.sol";

contract SmartAccountFactory {
    SmartAccount public immutable accountImplementation;
    address public immutable handler;

    constructor(IEntryPoint _entryPoint, address _handler) {
        handler = _handler;
        accountImplementation = new SmartAccount(_entryPoint);
    }

    function createAccount(address[] calldata validators, bytes[] calldata data, uint256 salt)
        public
        returns (SmartAccount ret)
    {
        address addr = getAddress(validators, data, salt);
        uint256 codeSize = addr.code.length;
        if (codeSize > 0) {
            return SmartAccount(payable(addr));
        }
        ret = SmartAccount(
            payable(
                new ERC1967Proxy{salt : bytes32(salt)}(
                address(accountImplementation),
                abi.encodeCall(SmartAccount.initialize, (handler, validators, data))
                )
            )
        );
    }

    function getAddress(address[] calldata validators, bytes[] calldata data, uint256 salt)
        public
        view
        returns (address)
    {
        return Create2.computeAddress(
            bytes32(salt),
            keccak256(
                abi.encodePacked(
                    type(ERC1967Proxy).creationCode,
                    abi.encode(
                        address(accountImplementation),
                        abi.encodeCall(SmartAccount.initialize, (handler, validators, data))
                    )
                )
            )
        );
    }
}
