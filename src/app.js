/* @flow */

import orderParser from './orderParser';

export default (order: string) => {
    const parsedOrder = orderParser(order);
    return parsedOrder;
};
