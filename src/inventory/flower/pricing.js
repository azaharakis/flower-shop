/* @flow */

import bundler from './bundler';

type Price = number;
type TotalPrice = Price;
type Quantity = number;
type Size = number;
type Bundle = [Size, Price]
type Bundles = Array<Bundle>
type GroupedBundles = Array<[Quantity, Bundle]>
type Item = { bundles: Bundles }
type Pricing = [TotalPrice, GroupedBundles];

export default ({ bundles }: Item, totalQuantity: number): Pricing => {
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
