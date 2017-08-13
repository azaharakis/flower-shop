/* @flow */

import type {Bundle, Bundles} from './item';

const evaluateBundles = (bundles, total, startAtIndex) => {
    let remaining = total; // the diff left over after the previous bundle has been applied

    return bundles.reduce((accum, bundle, i) => {
        const [size] = bundle;
        //If there is no remaining values or;
        //Are we are starting from a higher index
        if(remaining === 0 || startAtIndex >= i) {
            accum.push([0, bundle]);
            return accum;
        }

        //first time
        if(accum.length === 0){
            const numberOfTimes = Math.floor(total / size); //Number of times of we can fit a bundle in the total
            if(numberOfTimes >= 1){
                accum.push([numberOfTimes, bundle]);
                remaining = total - size * numberOfTimes;
            }else{
                accum.push([0, bundle]);
                remaining = total;
            }
            return accum;
        }

        //all others
        const numberOfTimes = Math.floor(remaining / size);
        if(numberOfTimes >= 1){
            accum.push([numberOfTimes, bundle]);
            remaining = remaining - size * numberOfTimes;
        } else {
            accum.push([0, bundle]);
        }

        //If there's a remainder on the final entry discard;
        if(i === bundles.length - 1 && remaining > 0){
            return [];
        }

        return accum;
    }, []);
};

type Quantity = number;

export default (bundles: Bundles, total: Quantity): Array<[Quantity, Bundle]> => {
    const highToLow = (a:Bundle, b:Bundle) => b[0] - a[0];
    const sortedBundles = bundles.sort(highToLow);

    let optimizedBundles = [];
    for(let i = 0; i < sortedBundles.length -1; i++){
        optimizedBundles = evaluateBundles(sortedBundles, total, i-1);
        if(optimizedBundles.length > 0) break;
    }

    return optimizedBundles;
};
