import React, { useState, useEffect,useReducer } from 'react'
import menureducer from './menureducer'

const useMenuAPI=()=> {
    const ALL_ITEMS ={
        burger: [],
        pizza: [], 
        pasta: [], 
        biryani: [], 
        noodles: [],
        dessert: [],
        cart:[]
     }
    const [state, dispatch]=useReducer(menureducer, ALL_ITEMS);
    const {burger,pizza,pasta,biryani,noodles,dessert,cart}=state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/07b5686b-9cc9-11ea-9a4c-13bbf958846e')
            .then(res => res.json())
            .then(json => {
                let [{ burger, pizza, pasta, biryani, noodles,dessert}] = json
                setTimeout(() => {
                   dispatch({
                       type: 'API_CALL',payload:{
                        burger: [...burger],
                        pizza: [...pizza], 
                        pasta: [...pasta], 
                        biryani: [...biryani], 
                        noodles: [...noodles],
                        dessert: [...dessert] 
                       }
                   })
                }, 1000)
            })
    }, []);
    const handleUpdate=(e,index)=>{
        if(e.target.id=="noodles"){
            (dispatch({type:'ADD_ITEM5',payload:{
                index
            }}))
        }
        if(e.target.id=="biryani"){
            (dispatch({type:'ADD_ITEM4',payload:{
                index
            }}))
        }
        if(e.target.id=="pizza"){
            (dispatch({type:'ADD_ITEM2',payload:{
                index
            }}))
        }
        if(e.target.id=="pasta"){
            (dispatch({type:'ADD_ITEM3',payload:{
                index
            }}))
        }
        if(e.target.id=="burger"){
            (dispatch({type:'ADD_ITEM1',payload:{
                index
            }}))
        }
        if(e.target.id=="dessert"){
            (dispatch({type:'ADD_ITEM6',payload:{
                index
            }}))
        }
    }
    useEffect (() => {
        dispatch({ type: 'TOTAL_AMOUNT' })    
    },[cart])
    const decrementCounter = (index) =>  {
        dispatch({ type: 'DECREMENT_COUNTER', payload: { index } })
    }
    const incrementCounter = (index) =>{
        dispatch({ type: 'INCREMENT_COUNTER', payload: { index } })
    }
    const removeUpdate = (index) => {
        dispatch({ type: 'DELETE_ITEMS', payload: { index } })
    }
    return {
        state,
        handleUpdate,
        removeUpdate,
        incrementCounter,
        decrementCounter
    }
}

export default useMenuAPI
