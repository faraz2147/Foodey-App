import React from 'react'

const Header = () => {
    return (
        <div className="card-header bg-primary">
            <div className="navbar pr-2">
                <img className="navbar-brand ml-4" src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"height="50" width="100"/>

                <form>
                    <input type="text" placeholder="Search.." name="Search" width="70"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
                <div className="row">
                    <div className="col ">
                        <button><a href="#" style={{color: "blue"}}><h5>Login</h5></a></button>
                    </div>
                
                <div >
                    <a href="#" style={{color: "white"}}><h5>More&nbsp;<i className="fa fa-chevron-down"></i></h5></a>
                </div>
                <div className="pl-2 ">
                    <a href="#" style={{color: "white"}}>
                        <h5>
                            <i className="fa fa-shopping-cart"></i>&nbsp;Cart
                        </h5>
                    </a>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header
