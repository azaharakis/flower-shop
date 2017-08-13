import {expect} from 'chai';
import app from './app';

describe('app', () => {
    let builtApp;

    const orderRequest = '1 A1';
    const item = {
        id: 'A1',
        price: 10
    };
    const inventory = [item];
    const pricingStrategy = (i, t) => i.price * t;

    beforeEach(() => {
        builtApp = app(
            orderRequest,
            inventory,
            pricingStrategy
        );
    });

    it('builds the app', () => {
        expect(builtApp).to.deep.equal(
            [
                [1, item, item.price]
            ]
        );
    });
});
