import { expect } from 'chai';
import buildOrder from './builder';

describe('Order Builder', () => {
    let order;
    const inventoryItem = { id: 'A1', price: 10.00 };
    const inventory = [ inventoryItem ];

    beforeEach(() => {
        const request = [
            [5, 'A1'],
            [20, 'IDONTEXIST']
        ];
        order = buildOrder(request)
            .from(inventory)
            .withPricingStrategy((i,t) => i.price * t)
            .given((requestedOrderItemId) => (i) => i.id === requestedOrderItemId);

    });

    it('captures valid orders', () => {
        expect(order.build().valid).to.deep.equal([
            [5, inventoryItem, 50]
        ]);
    });

    it('captures invalid orders', () => {
        expect(order.build().invalid).to.deep.equal([
            [20, 'IDONTEXIST']
        ]);
    });
});
