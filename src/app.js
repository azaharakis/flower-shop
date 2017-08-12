/* @flow */

import parse from './parse';
import getInventory, { type Item } from './inventory';
import buildOrder from './order';

export default (order: string) => {
    const requestedOrder = parse(order);
    const inventory  = getInventory();

    return buildOrder(requestedOrder)
        .from(inventory)
        .given((requestedOrderItemId) => (i: Item) => i.id === requestedOrderItemId)
        .build();
};
