// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

import "../common/Contants.sol";
import "./BaseValidator.sol";

interface IVerifier {
    function verifyProof(uint256[2] memory a, uint256[2][2] memory b, uint256[2] memory c, uint256[2] memory input)
        external
        view
        returns (bool r);
}

// OIDC ZK based validator that can only to add session validator
contract OIDCSessionOnlyValidator is BaseValidator {
    string public constant override NAME = "OIDC Validator";
    string public constant override VERSION = "0.0.1";

    function validateSignature(UserOperation calldata userOp, bytes32 userOpHash, bytes calldata signature)
        external
        payable
        override
        returns (uint256 validationData)
    {}

    function validCaller(address caller, bytes calldata data) external view override returns (bool) {}

    function enable(bytes calldata data) external payable override {}
}
