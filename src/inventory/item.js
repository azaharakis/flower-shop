/* @flow */
export const ids = {
    'R12' : 'R12',
    'L09' : 'L09',
    'T58' : 'T58'
};

/*eslint-disable no-undef */
export type ID = $Keys<typeof ids>;
export type Item = {|
    id: ID,
    name: string
|};

export default (id: ID, name: string): Item => ({
    id,
    name,
});

