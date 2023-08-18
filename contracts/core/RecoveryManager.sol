// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../common/Authority.sol";
import "../common/Contants.sol";
import "../interfaces/IRecovery.sol";

abstract contract RecoveryManager is Authority {
    event AddedRecovery(address recovery);
    event RemovedRecovery(address recovery);
}
