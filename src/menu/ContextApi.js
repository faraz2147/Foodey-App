import React, { createContext } from 'react';
import useMenuAPI from './useMenuAPI';

export const CartContext = createContext();
export const CartProvider = props => {
    return (
        <CartContext.Provider value={{ ...useMenuAPI() }}>
            {props.children}
        </CartContext.Provider>
    )
}