// initail state is the array that you use to store the dispatch
export const initialState = {
    cart: []
};

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);
//reducer updates state
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                // takes all items in cart and puts them into array
                cart: [...state.cart, action.item],
            };

        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
            let newCart = [...state.cart]
            if (index) {
                newCart.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket.`
                )
            }
            return {
                ...state,
                cart: newCart,
            }

        case "INIT_CART":
            return {
                ...state,
                cart: [...action.item.products],
            };

        default:
            return state;
    }
}
export default reducer;