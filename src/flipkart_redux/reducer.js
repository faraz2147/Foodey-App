const reducer = (state,action) => {
   const { type, payload:context } = action
    const { cart } = state;

    switch (type) {
        case 'API_LOADED': {
            return {
                ...state,
                ...context
            }
        }

        case 'DECREMENT_COUNTER': {
            const { index } = context
            cart[index].quantity--
            return {
                ...state,
                cart: [...cart]
            }
        }

        case 'INCREMENT_COUNTER': {
            const { index } = context
            cart[index].quantity++
            return {
                ...state,
                cart: [...cart]
            }
        }

        case 'DELETE_ITEM': {
            const { index } = context
            const cartItems=cart.filter((item,i) => i!= index )
            return {
                ...state,
                cart: [...cartItems]
            }
        }

        case 'TOTAL_AMOUNT': {
            return {
                ...state,
                totalAmount: cart.reduce((acc, item) => acc + parseInt(item.price) * item.quantity, 0)
            }
        }

        default: {
            return state
        }
    }
}

export default reducer
