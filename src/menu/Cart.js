import React, { useContext } from 'react';
import { CartContext } from './ContextApi';
import Alert from './Alert'


const Cart = () => {
    const { state: { cart, totalAmount }, removeUpdate, decrementCounter, incrementCounter } = useContext(CartContext)

    return (
        <>
        {!cart.length ? (
                            <Alert></Alert>
                        ) : (
            <div className="container w-80">
                <div className="row w-80 h5 p-3 text-center bg-warning text-white" style={{ fontSize: "2.5rem" }}>
                    <div className="col ">&nbsp;</div>
                    <div className="col">&nbsp;</div>
                    <div className="col-3 ">PRODUCT</div>
                    <div className="col">PRICE</div>
                    <div className="col">QUANTITY</div>
                    <div className="col">SUBTOTAL</div>
                </div>
                {cart.map(({ img, name, type, rates, price, quantity }, index) => (
                    <div className="row w-80 text-center mt-2">
                        <div className="col mt-5"><button onClick={() => removeUpdate(index)} className="btn btn-dark btn-lg">x</button></div>
                        <div className="col"><img src={img} alt="" height="100" width="120" /></div>
                        <div className="col-3 h5 mt-5">{name}</div>
                        <div className="col h5 mt-5">₹{price}</div>
                        <div className="col mt-5">
                            {!!quantity && (
                                <button className="btn btn-outline-white" type="submit" onClick={() => decrementCounter(index)} ><i class="fa fa-minus" aria-hidden="true"></i></button>
                            )}
                                    &nbsp;<span className="h4">{quantity}</span> &nbsp;
                        <button  className="btn btn-outline-white" onClick={() => incrementCounter(index)}><i class="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                        <div className="col h5 mt-5">₹{price * quantity}</div>
                    </div>
                ))}
                <div className="row  justify-content-end">
                    <button  className="btn btn-warning btn-xl" id="btn_menu">
                        Total :₹{totalAmount}
                    </button>
                </div>
                <div className="row justify-content-center">
                    <button  className="btn btn-primary btn-xl" id="btn_menu">
                        Place Order
                    </button>
                </div>
            </div>
                        )}      
        </>
    )
}

export default Cart