/* @flow */

import bundler from './bundler';

import type {Bundle, Flower} from './item';
type Price = number;
type TotalPrice = Price;
type Quantity = number;
type GroupedBundles = Array<[Quantity, Bundle]>
type Pricing = [TotalPrice, GroupedBundles];

export default ({ bundles }: Flower, totalQuantity: number): Pricing => {
    const groupedBundles = bundler(bundles, totalQuantity);
    const calculatePrice = ([totalPrice, subSets], [quantity, [size, price]]) => {
        return [
            totalPrice + (quantity * price),
            [
                ...subSets,
                [quantity, [size, price]]
            ]
        ];
    };
    const empty = [0, []];
    return groupedBundles.reduce(calculatePrice, empty);
};
