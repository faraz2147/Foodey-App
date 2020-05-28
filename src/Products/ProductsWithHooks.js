import React, { useState, useEffect } from 'react';
import Alert from '../menu/Alert';
import Header from './Header';
import Loader from './Loader';
import MyCarts from './MyCarts';
import CartItem from './CartItem';
import PriceDetails from './PriceDetails';

const ProductsWithHooks = () => {
    const [cart, setCart] = useState([])
    const [isAPILoaded, setIsAPILoaded] = useState(false)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect (() => {
        fetch('https://jsonblob.com/api/a8a694ea-9546-11ea-9b86-e5930cd6fab9')
            .then(res => res.json())
            .then(json => {
                setTimeout(() => {
                    setCart([...json])
                    setIsAPILoaded(true)
                    },1000)
                })
    }, []);
    useEffect (() => {    
            setTotalAmount(cart.reduce((acc, item) => acc + parseInt(item.price) * item.quantity, 0))            
    },[cart])
    const decrementCounter = (index) =>  {
        cart[index].quantity--
        setCart([...cart] )
    }
    const incrementCounter = (index) =>{
        cart[index].quantity++
        setCart([...cart])
    }
    const deleteItem = (index) => {
        cart.splice(index, 1)
        setCart([...cart])
    }
    return (
        <>
        {!isAPILoaded ? (<Loader/>) : (
            <div>
        <Header/>
            <div className=" card container shadow mt-2">
                <div className="row ">
                    <div className="col-sm-8">
                    <MyCarts cart={cart}></MyCarts>
                        {!cart.length ? (
                            <Alert></Alert>
                        ) : (
                               <CartItem cart={cart} deleteItem={deleteItem} decrementCounter={decrementCounter} incrementCounter={incrementCounter}></CartItem>
                            )}
                    </div>
                    <div className="card col-sm-3 ml-5  h-50 shadow ">
                        <PriceDetails cart={cart} totalAmount={totalAmount}></PriceDetails>
                    </div>
                </div>
            </div>
            </div>
        )}
    </>
    )
}

export default ProductsWithHooks