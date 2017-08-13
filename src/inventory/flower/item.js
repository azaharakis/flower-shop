/* @flow */
export const ids = {
    'R12' : 'R12',
    'L09' : 'L09',
    'T58' : 'T58'
};

/*eslint-disable no-undef */
export type ID = $Keys<typeof ids>;
export type Flower = {|
    id: ID,
    name: string,
    bundles: Bundles
|};
type Size = number;
type Price = number;

export type Bundle = [Size, Price]
export type Bundles = Array<Bundle>

export default (id: ID, name: string, bundles: Bundles): Flower => ({
    id,
    name,
    bundles
});

