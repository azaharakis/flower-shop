/* @flow */
import createItem, { type Item } from './item';

export default () : Array<Item> => {
    return [
        createItem(
            'R12',
            'Roses'
        ),
        createItem(
            'L09',
            'Lilies'
        ),
        createItem(
            'T58',
            'Tulips'
        )
    ];
};
