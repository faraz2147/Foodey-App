import React, { useEffect, useState } from 'react'
import './dishes.css'

const Dishes = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetch('https://jsonblob.com/api/5036fbee-9cf6-11ea-9a4c-af39c62e8cfb').
            then(response => response.json()).
            then(json => {
                setDishes([...json])
            })
    }, []);
    return (
        <>
            <div className="jumbotron " >
                <div className="heading" id="head"><i>Indian Cuisines-Famous Dishes</i></div><br />
                <div className="row">
                    {dishes.map(({ dish, img, city, state, description }) => (
                        <div className="col-3 mt-4 mb-5">
                            <div className="card" id="dish" style={{ height: '630px' }}>
                                <h2 className="card-title p-2">{dish}</h2>
                                <img src={img} height="250px" className="card-img-top " />
                                <div className="card-body" >
                                    <h4 id="city" style={{ color: 'green' }}><b>{city}</b></h4>
                                    <h4 id="city" style={{ color: 'red' }}>-{state}</h4>
                                    <p id="description">{description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Dishes