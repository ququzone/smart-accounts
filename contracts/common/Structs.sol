// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;


import "./Enum.sol";

// Param Rule for session key
struct ParamRule {
    uint256 offset;
    ParamCondition condition;
    bytes32 param;
}

struct Permission {
    address target;
    uint256 valueLimit;
    bytes4 sig;
    ParamRule[] rules;
    Operation operation;
}

struct SessionData {
    bytes32 merkleRoot;
    uint48 validAfter;
    uint48 validUntil;
    address paymaster; // address(0) means accept userOp without paymaster, address(1) means reject userOp with paymaster, other address means accept userOp with paymaster with the address
    bool enabled;
}