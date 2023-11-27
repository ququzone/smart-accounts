// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

library LinkedAddressList {
    address internal constant SENTINEL = address(0x1);
    uint160 internal constant SENTINEL_UINT = 1;

    function page(
        mapping(address => address) storage target,
        address start,
        uint256 pageSize
    ) internal view returns (address[] memory array, address next) {
        array = new address[](pageSize);

        uint256 count;
        address current = target[start];
        while (current != address(0x0) && current != SENTINEL && count < pageSize) {
            array[count] = current;
            current = target[current];
            count++;
        }
        next = current;
        assembly {
            mstore(array, count)
        }
    }

    function contains(mapping(address => address) storage target, address item) internal view returns (bool) {
        return SENTINEL != item && target[item] != address(0);
    }

    function setup(mapping(address => address) storage target) internal {
        target[SENTINEL] = SENTINEL;
    }

    function add(mapping(address => address) storage target, address item) internal {
        require(item != address(0) && item != SENTINEL, "item can't be zero or sentinel");
        if (target[item] != address(0)) {
            return;
        }
        target[item] = target[SENTINEL];
        target[SENTINEL] = item;
    }

    function remove(mapping(address => address) storage target, address prevItem, address item) internal {
        require(item != address(0) && item != SENTINEL, "item can't be zero or sentinel");
        require(target[prevItem] == item, "item and preitem mismatch");
        target[prevItem] = target[item];
        delete target[item];
    }
}
