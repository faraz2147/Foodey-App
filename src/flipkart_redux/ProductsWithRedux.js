import React,{useContext} from 'react';
import Alert from '../menu/Alert';
import Header from '../Products/Header';
import Loader from '../Products/Loader';
import MyCarts from '../Products/MyCarts';
import CartItem from '../Products/CartItem';
import PriceDetails from '../Products/PriceDetails';
import {ProductsContext} from '../context/ProductsContext'
//import useAPI from './useAPI'
//style="width:50%;height:90%;float:left;"
const ProductsWithRedux = () => {
    const {
        state: { cart, isAPILoaded}
    } = useContext(ProductsContext);
   
    return (
        <>
        {!isAPILoaded ? (<Loader/>) : (
            <div>
        <Header/>
            <div className=" card container shadow mt-2">
                <div className="row ">
                    <div className="col-sm-8">
                    <MyCarts ></MyCarts>
                        {!cart.length ? (
                            <Alert></Alert>
                        ) : (
                               <CartItem ></CartItem>
                            )}
                    </div>
                    <div className="card col-sm-3 ml-5  h-50 shadow ">
                        <PriceDetails></PriceDetails>
                    </div>
                </div>
            </div>
            </div>
        )}
        
    </>
    )
}

export default ProductsWithRedux