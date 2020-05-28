import React,{useContext} from 'react';
import {ProductsContext} from '../context/ProductsContext'

const MyCarts=() =>{
    const{state:{cart}}=useContext(ProductsContext)
    return (
         <div className="row"><b>My Cart({cart.length})</b>{"\n"}
        </div>
    )
}

export default MyCarts
