import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./Table"
import Products from "./Products";
import Promotions from "./Promotions"
import PromorionsWithHooks from "./PromotionsWithHooks"
import Movies from './movies/Movies';
import ProductsWithHooks from './Products/ProductsWithHooks';
import ProductsWithRedux from './flipkart_redux/ProductsWithRedux'
import Menu from './menu/Menu';
import Contact from './contact_us/Contact';
import Dishes from './Blog/Dishes';
import Home from './Home/Home';
import Head from './Home/Head';
import { BrowserRouter as Router,Link,Route } from "react-router-dom";
import Cart from './menu/Cart';
import useMenuAPI from './menu/useMenuAPI'
const App = () => {
  
  return (
    <div >
       <Router>
        <Head></Head>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/menu" component={Menu}></Route>
        <Route exact path="/Blog" component={Dishes}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        </Router> 
    </div>
  )
}

export default App;
