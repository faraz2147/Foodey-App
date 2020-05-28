import React,{useContext} from 'react';
import {ProductsContext} from '../context/ProductsContext'

const CartItem = () => {
    const {state:{ cart},deleteItem, decrementCounter, incrementCounter }=useContext(ProductsContext)
    return (
        <>
            <ul>
                {cart.map(({ image, name, portion, seller, price, quantity }, index) =>
                    <div className="card shadow pl-1 pb-3">
                        <div className="row">
                            <div className="col-3">
                                <img src={image} alt="" height="150" width="150" />
                                < div className="_3md1dr">
                                    {!!quantity && (
                                        <button type="submit" onClick={() => decrementCounter(index)} className="btnwNrY5O">-</button>
                                    )}&nbsp;<span className="_2zH4zg">{quantity}</span> &nbsp;
                                     <button type="submit" onClick={() => incrementCounter(index)} className="btnwNrY5O">+</button>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="display-5 font-weight-bold">{name}</div>
                                <div className="text-muted">{portion}</div>
                                <div className="text-muted mt-2">Seller : {seller}</div>
                                <h4 className="mt-2">₹{price * quantity}</h4>
                                <div>
                                    <button type="submit"className="btn btn-white ">SAVE FOR LATER</button>
                                    <button type="submit" onClick={() => deleteItem(index)} className="btn btn-white ">REMOVE</button>
                                </div></div>
                        </div></div>
                )}
            </ul>
            <button className="bg-warning float-right text-white"><span>Place Order</span></button>
            </>
    )
}

export default CartItem
