/* @flow */
import createFlower, { type Flower } from './flower';

export default () : Array<Flower> => {
    return [
        createFlower(
            'R12',
            'Roses',
            [
                [5 ,6.99],
                [10 ,12.99]
            ]
        ),
        createFlower(
            'L09',
            'Lilies',
            [
                [3, 9.95],
                [6, 16.95],
                [9, 24.95]
            ]
        ),
        createFlower(
            'T58',
            'Tulips',
            [
                [3, 5.95],
                [5, 9.95],
                [9, 16.99]
            ]
        )
    ];
};
