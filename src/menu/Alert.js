import React from 'react'
import { BrowserRouter as Router,Link,Route } from "react-router-dom";

const Alert=() =>{
    return (
        <div className="container p-5 text-center display-1">
            <div className="text-center"><img src="https://i.pinimg.com/originals/8a/70/f6/8a70f68a486e0f125e8ff176757c2194.png" width="600" height="450"/></div>
            <Link to="/menu" ><button className="btn btn-warning btn-center btn-xxl" id="btn_menu">Menu</button></Link>
        
        </div>
    )
}

export default Alert
