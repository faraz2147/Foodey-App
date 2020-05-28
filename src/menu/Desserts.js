import React, { useContext } from 'react';
import { CartContext } from './ContextApi';

const Desserts = () => {
    const { state: { dessert }, handleUpdate } = useContext(CartContext)
    return (
        <div className="row mt-4 ">
            {dessert.map(({ img, name, rates,type, price }, index) => (
                <div className="col-4 mb-3">
                    <div class="card" >
                        <img className="card-img-top" src={img} height="250" width="150" />
                        <div className="card-body">
                            <h4>{name}</h4>
                            <div>{type}</div>
                            <hr />
                            <div className="h5 d-flex justify-content-between">
                                <div >
                                    <kbd className="bg-success"><i className="fa fa-star"></i>{rates.rating}</kbd>
                                </div>
                                <div className="text-muted">{rates.review}</div>
                            </div>
                            <hr />
                            <div className="h5 d-flex justify-content-between">
                                <div>₹{price}</div>
                                <button onClick={(e) => handleUpdate(e, index)} id="dessert" className="btn btn-warning btn-center btn-lg"><i className="fa fa-shopping-cart"></i>Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Desserts;