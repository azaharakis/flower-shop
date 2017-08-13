/* @flow */

type RequestedOrder = Array<[number, string]>

export default <InventoryItem, Pricing>(requestedOrder: RequestedOrder) : Object => {
    type Quantity = number;
    type OrderRequest = {
        valid: Array<[Quantity, InventoryItem, Pricing]>,
        invalid: Array<[Quantity, string]>
    }

    let items: Array<InventoryItem> = [];
    let predicate;
    let pricingStrategyFn;

    return {
        from(i: Array<InventoryItem>) {
            items = i;
            return this;
        },

        given(p: (id: string) => () => boolean){
            predicate = p;
            return this;
        },

        withPricingStrategy(fn: (InventoryItem, number) => Pricing){
            pricingStrategyFn = fn;
            return this;
        },

        build() : OrderRequest {
            return requestedOrder.reduce((orders, [quantity, id]) => {
                const foundItem = items.find(predicate(id));

                if(foundItem){
                    orders.valid.push([quantity, foundItem, pricingStrategyFn(foundItem, quantity)]);
                }else {
                    orders.invalid.push([quantity, id]);
                }
                return orders;
            }, {
                valid: [],
                invalid: []
            });
        }
    };
};
