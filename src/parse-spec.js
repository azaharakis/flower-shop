import { expect } from 'chai';
import parse from './parse';

describe('parser', () =>{
    let parsedOrder;
    beforeEach(() => {
        parsedOrder = parse(`
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
            parsedOrder = parse(`
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
