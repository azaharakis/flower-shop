import {expect} from 'chai';
import pricing from './pricing';

describe('pricing', () => {
    const createBundle =  (quantity) => [ quantity, 100 ];

    it('calculates the total price of a bundle', () => {
        const [totalPrice] = pricing({
            bundles: [
                createBundle(5),
                createBundle(10)
            ]
        }, 20);

        expect(totalPrice).to.deep.equal(200);
    });

    it('shows the breakdown of bundles with there quantities', () => {

        /*eslint-disable no-unused-vars */
        const [totalPrice, groupedBundles] = pricing({
            bundles: [
                createBundle(5),
                createBundle(10)
            ]
        }, 20);

        expect(groupedBundles).to.deep.equal(
            [
                [ 2, createBundle(10) ],
                [ 0, createBundle(5) ]
            ]
        );

    });
});
