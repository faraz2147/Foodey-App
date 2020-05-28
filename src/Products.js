
import React, { Component } from "react"
class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [],
            totalAmount: 0
        }
    }
    componentDidMount() {
        fetch('https://jsonblob.com/api/a8a694ea-9546-11ea-9b86-e5930cd6fab9')
            .then(res => res.json())
            .then(json => {
                setTimeout(() => {
                    this.setState({
                        cart: [...json],
                        totalAmount: json.reduce((acc, item) => acc + item.salary, 0)
                    })
                }, 2000)

            })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.cart != this.state.cart) {
            this.setState({
                totalAmount: this.state.cart.reduce((acc, item) => acc + parseInt(item.price) * item.quantity, 0)
            })
        }

    }
    decrementCounter(index) {
        let { cart } = this.state
        cart[index].quantity--
        this.setState({ cart: [...cart] })
    }
    incrementCounter(index) {
        let { cart } = this.state
        cart[index].quantity++
        this.setState({ cart: [...cart] })
    }
    deleteItem(index) {
        const { cart } = this.state
        cart.splice(index, 1)
        this.setState({ cart: [...cart] })
    }
    render() {
        const { cart, totalAmount } = this.state;
        return (
            <>
                <div className="card-header bg-primary mb-">
                    <div className=" navbar pr-2">
                        <img className="navbar-brand ml-4" src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png" height="50" width="100"/>
                            <div className="search-container">
                                <form action="" method="get">
                                    <input type="text" placeholder="Search..." name="search"/>
                                     <button className="bg-warning" type="submit"><span className="material-icons">
                                            search
                                            </span>
                                        </button>
                                </form>
                            </div>
                                <a href="#" style={{color: "white"}}>Log in
                                    </a> <a href="#" style={{color: "white"}}>More<span className="material-icons">
                                    keyboard_arrow_down
                                    </span>
                                </a> <a href="#" style={{color: "white"}}>
                                    <p >Cart<span className="material-icons">
                                        shopping_cart
                                    </span></p>
                                </a>
                                </div>
                </div>
                    <div className=" card container shadow">
                        <div className="row ">
                            <div className="col-sm-8">
                                <div className="row">My Cart({cart.length})</div>

                                {!cart.length ? (

                                    <div class="alert alert-danger" role="alert">

                                        cart is empty!!!
                                    </div>

                                ) : (
                                        <ul>
                                            {cart.map(({ image, name, portion, seller, price, quantity }, index) =>

                                                <div className=" card shadow">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <img src={image} alt="" height="150" width="150" />
                                                            {!!quantity && (
                                                                <button type="submit" onClick={() => this.decrementCounter(index)} className="btn">-</button>
                                                            )}
                                                &nbsp;
                                                <span className="badge badge-warning">{quantity}</span> &nbsp;
                                                <button type="submit" onClick={() => this.incrementCounter(index)} className="btn">+</button>
                                                        </div>
                                                        <div className="col-9">
                                                            <div className="display-5 font-weight-bold">{name}</div>
                                                            <div className="text-muted">{portion}</div>
                                                            <div className="text-muted mt-2">seller : {seller}</div>
                                                            <h4 className="mt-2">₹{price * quantity}</h4>
                                                            <div>
                                                                <button type="submit" className="btn btn-white font=weight-bolder">SAVE FOR LATER</button>
                                                                <button type="submit" onClick={() => this.deleteItem(index)} className="btn btn-white font=weight-bolder">REMOVE</button>
                                                            </div></div>
                                                    </div></div>
                                            )}
                                        </ul>
                                    )}
                            </div>
                            <div className="card col-sm-3 ml-2 h-50 shadow">
                                <div className="row text-muted">
                                    PRICE DETAILS
                                        </div><hr />
                                <div className="row ">
                                    Price(1 item)
                                        </div><hr />
                                <div className="row font-weight-bold">
                                    Total Amount
                                            <div className="badge badge-light p-2 " >
                                        ₹{totalAmount}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}
export default Products