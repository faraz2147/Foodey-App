const menureducer = (state, action) => {

    const {type,payload:context}= action
    const {burger,pizza,pasta,biryani,noodles,dessert,cart}=state;

    switch (type) {
        case 'API_CALL': {
            return{
                ...state,
                ...context
            }
        }
        case 'CART': {
            console.log(cart)
            return{
                ...state,
                ...context
            }
        }
        case 'ADD_ITEM1': {
            const { index } = context;
       
            return {
                ...state,
                cart: [...cart, burger[index]],
            }
        }
        case 'ADD_ITEM2': {
            const { index } = context;
       
            return {
                ...state,
                 cart: [...cart, pizza[index]],
            }
        }
        case 'ADD_ITEM3': {
            const { index } = context;
       
            return {
                ...state,
                cart: [...cart, pasta[index]],
            }
        }
        case 'ADD_ITEM4': {
            const { index } = context;
       
            return {
                ...state,
                cart: [...cart, biryani[index]],
            }
        }
        case 'ADD_ITEM5': {
            const { index } = context;
       
            return {
                ...state,
                cart: [...cart, noodles[index]],
            }
        }
        case 'ADD_ITEM6': {
            const { index } = context;
       
            return {
                ...state,
                cart: [...cart, dessert[index]],
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

        case 'DELETE_ITEMS': {
            const { index } = context;
            cart.splice(index, 1)
            return {
                ...state,
                cart: [...cart]
            }
        }
        case 'TOTAL_AMOUNT': {
            return {
                ...state,
                totalAmount: cart.reduce((acc, item) => acc + parseInt(item.price) * item.quantity, 0)
            }
        }

        default:{
            return state
        }
    }
}
export default menureducer