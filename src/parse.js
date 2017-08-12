/* @flow */

export default (input: string) : Array<[number, string]> =>
    input
        .trim()
        .split('\n')
        .map( (o: string) => {
            const [quantity, id] = o.trim().split(' ');
            const parseQuantity = parseInt(quantity) || -1;
            const parseId = id || 'INVALID';

            return [parseQuantity, parseId];
        });
