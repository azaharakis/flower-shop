/* @flow */

import type {Bundle, Bundles} from './item';

const generateAGroupedBundle = (bundle, size) => total => {
    const numberOfTimes = Math.floor(total / size); //Number of times of we can fit a bundle in the total
    let groupedBundle;
    if(numberOfTimes >= 1){
        groupedBundle = [numberOfTimes, bundle];
        total = total - size * numberOfTimes;
    }else{
        groupedBundle = [0, bundle];
    }
    return [ total, groupedBundle ];
};

const evaluateBundles = (bundles, total, startAtIndex) => {
    let remaining = total; // the diff left over after the previous bundle has been applied

    return bundles.reduce((accumulator, bundle, i) => {
        const [size] = bundle;
        const calculateGroupedBundleFrom = generateAGroupedBundle(bundle, size);

        //If there is no remaining values or;
        //we are starting at the next highest index
        if(remaining === 0 || startAtIndex > i) {
            return [
                ...accumulator,
                [0, bundle]
            ];
        }

        const [newTotal, groupedBundle] = calculateGroupedBundleFrom(remaining);
        remaining = newTotal;

        //If there's a remainder on the final entry discard our results;
        if(i === bundles.length - 1 && remaining > 0){
            return [];
        }

        return [
            ...accumulator,
            groupedBundle
        ];
    }, []);
};

type Quantity = number;

export default (bundles: Bundles, total: Quantity): Array<[Quantity, Bundle]> => {
    const highToLow = (a:Bundle, b:Bundle) => b[0] - a[0];
    const sortedBundles = bundles.sort(highToLow);

    let optimizedBundles = [];
    for(let i = 0; i < sortedBundles.length -1; i++){
        optimizedBundles = evaluateBundles(sortedBundles, total, i);
        //If there are results we have a group of optimized bundles, otherwise
        //we are going to try again starting from the next largest bundle
        if(optimizedBundles.length > 0) break;
    }

    return optimizedBundles;
};
