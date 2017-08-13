import {expect} from 'chai';
import bundler from './bundler';

describe('bundler', () => {
    const createBundle =  (quantity) => [ quantity, 999 ];

    it('generates optimized bundles', () => {
        expect(bundler([
            createBundle(9),
            createBundle(6),
            createBundle(3),
        ],
        15)
        ).to.deep.equal(
            [
                [1, createBundle(9)],
                [1, createBundle(6)],
                [0, createBundle(3)],
            ]
        );
    });

    it('generates optimized bundles with the largest values', () => {
        expect(bundler([
            createBundle(10),
            createBundle(5),
        ],
        20)
        ).to.deep.equal(
            [
                [2, createBundle(10)],
                [0, createBundle(5)],
            ]
        );
    });

    it('generates optimized bundles when they are provided in any order', () => {
        expect(bundler([
            createBundle(6),
            createBundle(9),
            createBundle(3),
        ],
        15)
        ).to.deep.equal(
            [
                [1, createBundle(9)],
                [1, createBundle(6)],
                [0, createBundle(3)],
            ]
        );
    });

    it('generates optimized bundles when the largest values of the set are not compatible with the remaining values', () => {
        expect(bundler([
            createBundle(9),
            createBundle(5),
            createBundle(3),
        ],
        13)
        ).to.deep.equal(
            [
                [0, createBundle(9)],
                [2, createBundle(5)],
                [1, createBundle(3)],
            ]
        );
    });

    it('generates no bundles when it cannot be optimized', () => {
        expect(bundler([
            createBundle(10),
            createBundle(5),
        ],
        2)
        ).to.deep.equal([ ]);
    });
});
