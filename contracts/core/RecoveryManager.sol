// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../common/Authority.sol";
import "../common/Contants.sol";
import "../libraries/LinkedAddressList.sol";
import "../interfaces/IRecoveror.sol";

abstract contract RecoveryManager is Authority {
    error ErrorRecoveror(address);

    using LinkedAddressList for mapping(address => address);

    event AddedRecoveror(address recoveror);
    event RemovedRecoveror(address recoveror);

    mapping(address => address) internal recoverors;

    function getRecoverorsPaginated(address start, uint256 pageSize)
        external
        view
        returns (address[] memory array, address next)
    {
        return recoverors.page(start, pageSize);
    }

    function addRecoveror(address recoveror, bytes calldata data) external onlySelf {
        recoverors.add(recoveror);
        IRecoveror(recoveror).bind(data);
        emit AddedRecoveror(recoveror);
    }

    function removeRecoveror(address prevRecoveror, address recoveror) external onlySelf {
        recoverors.remove(prevRecoveror, recoveror);
        emit RemovedRecoveror(recoveror);
    }

    function isRecoverorEnabled(address recoveror) public view returns (bool) {
        return recoverors.contains(recoveror);
    }

    function _setupRecoverors() internal {
        recoverors.setup();
    }
}
