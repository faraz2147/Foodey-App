import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Link,Route } from "react-router-dom";
import Menu from '../menu/Menu';
const Home = () => {

    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('https://jsonblob.com/api/3a224c85-9cc8-11ea-9a4c-a51431f74172').then(response => response.json()).then(json => {
            setItem([...json])
        })
    }, []);
    return (
        <>
            <div className="p-3">
                <div className="py-5" id="backgound" style={{ backgroundImage: `url("http://wallpapersdsc.net/wp-content/uploads/2016/09/Food-HD-Background.png")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <h1 className="display-1 font-bold text-center text-white  mb-5 ">ORDER TAKE AWAY ONLINE</h1>
                    <h3 className="text-center text-white mb-3">From Your Favorite Restaurants!!!</h3>
                    <div className="text-center display-1">
                    <Link to="/menu"><button className="btn btn-warning btn-center" id="btn_menu">Menu</button></Link>
                    </div>
                    <div className="row  ml-5 mt-5">
                        <div className="col-3 pl-5 text-white mt-5"><b >24/7DELIVERY</b></div>
                        <div className="col-3 pl-5 text-white mt-5"><b>2500 RESTAURANTS</b></div>
                        <div className="col-3 pl-5 text-white mt-5"><b>ORDER WITH APP</b></div>
                        <div className="col-3 pl-4 text-white mt-5"><b>FAST DELIVERY</b></div>
                    </div>

                </div>
                <h1 className="mt-3 text-center">Our Picks for You</h1>
                <div className="row ml-4">
                    {item.map(({ image, type }) => (
                        <>
                            <div className="col-4 ">
                                <div class="card shadow m-4" id="dish">
                                    <img class="card-img-top" width="200" height="200" src={image} alt="Card image cap" />
                                    <div class="card-body">
                                        <strong class="card-title" >{type}</strong>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div><br />

                <h1 className="display-1 text-center text-warning mt-5 mb-5" >HOW TO ORDER ?</h1>

                <div className="container mt-5 ">
                    <div className="row ">
                        <div className="col ">
                            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<img src="https://www.ikydz.com/wp-content/uploads/2016/06/land-icon.png" height="100" width="100" /><br /><b style={{ color: "orange" }}>1 Choose Your Location</b></div>
                        <div className="col">
                            &nbsp;&nbsp; &nbsp;<img src="https://previews.123rf.com/images/keltt/keltt1405/keltt140500008/28075013-black-round-restaurant-icon-with-cook-hat-and-kitchen-utensil.jpg" height="100" width="100" /><br /><b style={{ color: "orange" }} >2 Choose Restaurant</b></div>
                        <div className="col ">
                            &nbsp;&nbsp;  <img src="https://cdn3.iconfinder.com/data/icons/food-155/100/Farm_products_1-512.png" height="100" width="100" /><br /><b style={{ color: "orange" }}>3 Make your Order</b></div>
                        <div className="col">
                            &nbsp;&nbsp; <img src="https://thumbs.dreamstime.com/b/delivery-man-scooter-cartoon-courier-riding-delivering-box-45548006.jpg" height="100" width="100" /><br /><b style={{ color: "orange" }}>4 Food is on the way</b></div><br />
                    </div>

                </div>
            </div>

            <div className=" bg-light mt-5 mb-5 ">
                <h1 className="text-center text-primary mt-5">Follow Us on</h1><br />
                <div className="row justify-content-center" >
                    <div className="col-1">
                        <img src="https://www.kindpng.com/picc/m/19-196579_social-media-facebook-computer-icons-linkedin-logo-facebook.png" height="35" width="35" />
                    </div>
                    <div className="col-1">
                        <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-512.png" height="35" width="35" />
                    </div>
                    <div className="col-1">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/51I0nXrW5jL._AC_SL1050_.jpg" height="35" width="35" />
                    </div>
                </div>
                <h4 className="text-center text-primary mt-5">Copyrights Reserverd 2020<sup>©</sup></h4>

            </div>


        </>
    )
}

export default Home