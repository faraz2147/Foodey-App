import React,{useContext} from 'react';
import {ProductsContext} from '../context/ProductsContext'

const PriceDetails = () => {
    const{state:{ cart, totalAmount }}=useContext(ProductsContext)
    return (
        <div className="card pt-2 pl-2 pr-2 pb-5 mt-3">
            <div className="text-muted">
                PRICE DETAILS
            </div><hr />
            <div className="row">
                <div className="col-auto">
                    Price({cart.length} items)</div>
                <div className="col text-right">
                    ₹{totalAmount}
                </div>
            </div><br />
            <div className="row">
            <div className="col-auto">
                    <div className="text-success">Delivery Fee</div>
                </div>
                <div className="col text-success text-right">
                    Free</div>
            </div><hr />
            <div className="row font-weight-bolder">
            <div className="col-auto">
                    Total Amount</div>
                    <div className="col text-right">
                    ₹{totalAmount}
                </div>
            </div><hr />
        </div>
    )
}

export default PriceDetails
