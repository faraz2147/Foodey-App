import React, { useEffect, useReducer } from 'react';
import reducer from './reducer'

const useAPI = () => {
    const INITIAL_STATE = {
        cart: [],
        isAPILoaded: false,
        totalAmount: 0
    }
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const { cart } = state;

    useEffect (() => {
        fetch('https://jsonblob.com/api/a8a694ea-9546-11ea-9b86-e5930cd6fab9')
            .then(res => res.json())
            .then(json => {
                setTimeout(() => {
                   dispatch({ type: 'API_LOADED', payload: { cart: [...json], isAPILoaded: true } })
                    },1000)
                })
    }, []);
    useEffect (() => {
        dispatch({ type: 'TOTAL_AMOUNT' })    
    },[cart])
    const decrementCounter = (index) =>  {
        dispatch({ type: 'DECREMENT_COUNTER', payload: { index } })
    }
    const incrementCounter = (index) =>{
        dispatch({ type: 'INCREMENT_COUNTER', payload: { index } })
    }
    const deleteItem = (index) => {
        dispatch({ type: 'DELETE_ITEM', payload: { index } })
    }
    return {
        state,
        deleteItem,
        incrementCounter,
        decrementCounter
    }
}

export default useAPI;
