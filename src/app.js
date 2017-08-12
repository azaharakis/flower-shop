/* @flow */

import parse from './parse';
import getInventory from './inventory';

export default (order: string) => {
    const requestedOrder = parse(order);
    const inventory  = getInventory();
    return {
        requestedOrder,
        inventory
    };
};
