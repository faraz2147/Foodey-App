import React, { useContext }  from 'react';
import { BrowserRouter as Router,Link,Route } from "react-router-dom";
import { CartContext } from '../menu/ContextApi';

const Head = () => {
            const {state:{cart}}=useContext(CartContext)
    return (
        <>
        <div className="row bg-light text-dark py-3">
            <div className="col-4 ml-5"><Link to="/"><img src="http://fooddy.ancorathemes.com/wp-content/uploads/2016/12/logo-7.png" height="50" width="100"></img></Link></div>
            <div className="col "><Link to="/"><h5 className="mt-3">Home</h5></Link></div>
            <div className="col"><Link to="/menu"><h5 className="mt-3">Menu</h5></Link></div>
            <div className="col"><Link to="/Blog"><h5 className="mt-3">Blog</h5></Link></div>
            <div className="col"><Link to="/Contact"><h5 className="mt-3">Contact us</h5></Link></div>
            <div className="col"><Link to="/cart"><h5 className="mt-3"><i className="fa fa-shopping-cart mr-1"></i>Cart({cart.length})</h5></Link></div>
        </div>
        
</>
    )

}
export default Head