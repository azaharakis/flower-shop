/* @flow */

import parse from './parse';
import getInventory, { type Flower, pricing } from './inventory';
import buildOrder from './order';

export default (order: string) => {
    const requestedOrderItemMatchesInventoryItemId = (requestedOrderItemId) => (i: Flower) => i.id === requestedOrderItemId;
    const requestedOrder = parse(order);
    const inventory  = getInventory();

    return buildOrder(requestedOrder)
        .from(inventory)
        .given(requestedOrderItemMatchesInventoryItemId)
        .withPricingStrategy(pricing)
        .build();
};
