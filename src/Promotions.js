import React, { Component } from "react"
class Promotion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
            , isAPILoaded: false,
            payload: {
                name: "",
                isPromoted: true
            }
        }
    }
    componentDidMount() {
        fetch('https://jsonblob.com/api/afb18b17-8992-11ea-813a-7d410a822fe3')
            .then(res => res.json())
            .then(json => {
                setTimeout(() => {
                    this.setState({
                        employees: [...json],
                        isAPILoaded: true
                    })
                    }, 2000)

                })
           

    }


    updateData(e, index) {
        const { employees } = this.state;
        employees[index].isPromoted = e.target.checked;
        this.setState({ employees: [...employees] })
    }

    handleInput(e) {
        const { value, id } = e.target;
        this.setState({ payload: { ...this.state.payload, [id]: value } })
    }
    addEmployee() {
        const { employees, payload } = this.state;
        this.setState({ employees: [...employees, payload] })
    }
    deletedata(index){
        const {employees}=this.state;
        this.setState({
           employees: [...employees.slice(0,index),...employees.slice(index+1)]
        })
    }
    render() {
        const { employees, isAPILoaded } = this.state;
        return (
            <>
                {!isAPILoaded ? (<img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp?cid=ecf05e473a4f51a490adf0dee26169fe99ed2bfc1fbfccb9&rid=giphy.webp"/>) : (

                    <div>
                        <div className="container jumbotron">
                            <ul class="list-group">
                                {employees.map(({ name, isPromoted }, index) =>
                                    <li class="list-group-item">
                                        <div className="row">
                                            <div className="col">{name}</div>
                                            <div className="col"><input type="checkbox" onChange={(e) => this.updateData(e, index)} defaultChecked={isPromoted}></input>{!!isPromoted ? 'Promoted' : 'NotPromoted'}</div>
                                            <div className="col"><button onClick={() => this.deletedata(index)} className="btn btn-danger">Remove</button></div>
                                        </div>

                                    </li>
                                )}
                            </ul>
                        </div>
                        <label for="name">Employee name:</label>
                        <input type="text" onChange={(e) => this.handleInput(e)} placeholder="Enter Employee name" className="form-control" id="name" />

                        <button onClick={() => this.addEmployee()} className="btn btn-success">Add</button>
                    </div>
                )}


            </>
        )
    }
}
export default Promotion
