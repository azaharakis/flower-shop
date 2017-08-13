/* @flow */

import app from './app';
const util = require('util');

/*eslint-disable no-console */
console.log(
    util.inspect(
        app(`
            10 R12
            15 L09
            13 T58
        `),
        { depth: null }
    )
);
