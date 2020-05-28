import React, { useContext } from 'react';
import Burgers from './Burgers';
import Pizza from './Pizza';
import Pasta from './Pasta';
import Biryani from './Biryani';
import Noodles from './Noodles';
import Desserts from './Desserts';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { CartContext } from './ContextApi';

const Menu = () => {

    const { state:
        {
            burger,
            pizza,
            pasta,
            biryani,
            noodles,
            dessert,
            cart
        }, handleUpdate
    } = useContext(CartContext);
    return (
        <>
            <div className="py-5" id="backgound" style={{
                backgroundImage: `url("https://static.toiimg.com/photo/72023714.cms")`
                , backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }}>
                <h1 class="text-center text-white mt-5 mb-5">MENU</h1>
            </div>
            <div className="container ">
                <Router>
                    <div className="row bg-light mt-3">
                        <div className="col"><Link to="/burgers"><h5 className="mt-3">Burgers</h5></Link></div>
                        <div className="col"><Link to="/pizza"><h5 className="mt-3">Pizza</h5></Link></div>
                        <div className="col"><Link to="/pasta"><h5 className="mt-3">Pasta</h5></Link></div>
                        <div className="col"><Link to="/biryani"><h5 className="mt-3">Biryani</h5></Link></div>
                        <div className="col"><Link to="/noodles"><h5 className="mt-3">Noodles</h5></Link></div>
                        <div className="col"><Link to="/desserts"><h5 className="mt-3">Desserts</h5></Link></div>
                    </div>
                    <Route exact path="/burgers" component={Burgers}></Route>
                    <Route exact path="/pizza" component={Pizza}></Route>
                    <Route exact path="/pasta" component={Pasta}></Route>
                    <Route exact path="/biryani" component={Biryani}></Route>
                    <Route exact path="/noodles" component={Noodles}></Route>
                    <Route exact path="/desserts" component={Desserts}></Route>
                </Router>
            </div>
        </>
    )
}

export default Menu