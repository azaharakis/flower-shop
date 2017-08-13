/* @flow */

import parse from './parse';
import getInventory, { pricing } from './inventory';
import buildOrder from './order';

type Item = {
    id: string
}

export default (order: string, inventory: Array<*> = getInventory(), pricingStrategy: Function = pricing) => {
    const requestedOrderItemMatchesInventoryItemId = (requestedOrderItemId) => (i: Item) => i.id === requestedOrderItemId;
    const requestedOrder = parse(order);


    const { valid } = buildOrder(requestedOrder)
        .from(inventory)
        .given(requestedOrderItemMatchesInventoryItemId)
        .withPricingStrategy(pricingStrategy)
        .build();

    return valid;
};
