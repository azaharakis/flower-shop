/* @flow */

type RequestedOrder = Array<[number, string]>

export default <I>(requestedOrder: RequestedOrder) : Object => {
    type Quantity = number;
    type OrderRequest = {
        valid: Array<[Quantity, I]>,
        invalid: Array<[Quantity, string]>
    }

    let items: Array<I> = [];
    let predicate;

    return {
        from(i: Array<I>) {
            items = i;
            return this;
        },

        given(p: (id: string) => () => boolean){
            predicate = p;
            return this;
        },

        build() : OrderRequest {
            return requestedOrder.reduce((orders, [quantity, id]) => {
                const foundItem = items.find(predicate(id));

                if(foundItem){
                    orders.valid.push([quantity, foundItem]);
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
