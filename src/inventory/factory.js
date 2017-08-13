/* @flow */
import createFlower, { type Flower } from './flower';

export default () : Array<Flower> => {
    return [
        createFlower(
            'R12',
            'Roses'
        ),
        createFlower(
            'L09',
            'Lilies'
        ),
        createFlower(
            'T58',
            'Tulips'
        )
    ];
};
