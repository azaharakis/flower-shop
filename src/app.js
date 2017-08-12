/* @flow */

import orderParser from './orderParser';
import getInventory from './inventory';

export default (order: string) => {
    const requestedOrder = orderParser(order);
    const inventory  = getInventory();
    return {
        requestedOrder,
        inventory
    };
};
