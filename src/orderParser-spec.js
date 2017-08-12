import { expect } from 'chai';
import orderParser from './orderParser';

describe('Order Parser', () =>{
    let parsedOrder;
    beforeEach(() => {
        parsedOrder = orderParser(`
                        10 R12
                        5 L09
                      `);
    });

    it('will parse an order', () => {
        expect(parsedOrder).to.deep.equal([
            [10, 'R12'],
            [5, 'L09'],
        ]);
    });

    describe('with invalid orders', () =>{
        beforeEach(() => {
            parsedOrder = orderParser(`
                        S R12
                        5
                      `);
        });

        it('is handled', () => {
            expect(parsedOrder).to.deep.equal([
                [-1, 'R12'],
                [5, 'INVALID'],
            ]);
        });
    });
});
