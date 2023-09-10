// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

import "../interfaces/IValidator.sol";
import "../common/Contants.sol";
import "../common/Helpers.sol";
import "./BaseValidator.sol";

struct SessionKeyStorage {
    uint48 validUntil;
    uint48 validAfter;
}

contract OwnerSessionKeyValidator is BaseValidator {
    string public constant override NAME = "Owner Session Key Validator";
    string public constant override VERSION = "0.0.1";

    event NewSessionKey(address indexed account, address indexed sessionKey, uint48 validUntil, uint48 validAfter);

    mapping(address sessionKey => mapping(address account => SessionKeyStorage)) public sessionKeyStorage;

    function validateSignature(address account, bytes32 userOpHash, bytes calldata signature)
        external
        payable
        override
        returns (uint256 validationData)
    {
        bytes32 hash = ECDSA.toEthSignedMessageHash(userOpHash);
        address recovered = ECDSA.recover(hash, signature);

        SessionKeyStorage storage sessionKey = sessionKeyStorage[recovered][account];
        if (sessionKey.validUntil == 0) {
            // we do not allow validUntil == 0 here
            return Contants.SIG_VALIDATION_FAILED;
        }
        validationData = _packValidationData(false, sessionKey.validUntil, sessionKey.validAfter);
    }

    function enable(bytes calldata data) external override {
        address sessionKey = address(bytes20(data[0:20]));
        uint48 validUntil = uint48(bytes6(data[20:26]));
        uint48 validAfter = uint48(bytes6(data[26:32]));
        require(validUntil > validAfter, "OwnerSessionKeyValidator: invalid validUntil/validAfter"); // we do not allow validUntil == 0 here use validUntil == 2**48-1 instead
        sessionKeyStorage[sessionKey][msg.sender] = SessionKeyStorage(validUntil, validAfter);

        emit NewSessionKey(msg.sender, sessionKey, validUntil, validAfter);
    }
}
