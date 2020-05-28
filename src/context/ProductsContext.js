import React,{createContext} from 'react';
import useAPI from '../flipkart_redux/useAPI';

export const ProductsContext=createContext();
export const ProductsProvider = props =>{

    return(
        <ProductsContext.Provider value={{...useAPI()}}>
            {props.children}
        </ProductsContext.Provider>
    )
}