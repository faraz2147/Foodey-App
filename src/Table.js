import React, { Component } from 'react'
import Tbody from "./Tbody"
class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            table: { ...this.props },
            formData: {
                start: "",
                end: ""
            },
            counter: 0
        }

    }
    decrementCounter(){
        this.setState(prevState => {
            return {
                ...prevState,
                counter: prevState.counter -1
            }
        })
    }

    incrementCounter() {
        this.setState({ counter: this.state.counter + 1 })
    }

    updateTable() {
        const { table, formData } = this.state;
        this.setState({
            table: {
                ...table,
                ...formData
            },
            formData: {
                start: "",
                end: ""
            }
        })
    }

    handleInput(e) {
        const {
            target: {
                value,
                id
            }
        } = e;
        this.setState({ formData: { ...this.state.formData, [id]: value } })
    }
    render() {
        const { table: { start = 2, end = 10 }, formData, counter } = this.state;
        return (

            <div>
                {!!counter && (
                    <button type="submit" onClick={() => this.decrementCounter()} className="btn btn-danger">-</button>

                )}
                &nbsp;
                <span className="badge badge-warning">{counter}</span> &nbsp;
                <button type="submit" onClick={() => this.incrementCounter()} className="btn btn-success">+</button>
                <table class="table table-bordered table-dark">
                    <thead>
                        <tr >
                            <th scope="col">Start</th>
                            <th scope="col"></th>
                            <th scope="col">End</th>
                            <th scope="col">Result</th>
                        </tr>
                    </thead>
                    <tbody>{
                        [...new Array(parseInt(end))].map((item, index) => (

                            <Tbody start={start} index={index}></Tbody>
                        ))
                    }
                    </tbody>
                </table>
                <pre>{JSON.stringify(this.state, null, 4)}</pre>
                <br />

                <div className="form-group">
                    <label for="start">Table Starts with</label>
                    <input type="text" value={formData.start} onChange={(e) => this.handleInput(e)} className="form-control" id="start" aria-describedby="emailHelp" />

                </div>
                <div className="form-group">
                    <label for="end">Table ends with</label>
                    <input type="text" value={formData.end} onChange={(e) => this.handleInput(e)} className="form-control" id="end" />
                </div>

                <button type="submit" onClick={() => this.updateTable()} className="btn btn-primary">Submit</button>

            </div>
        )
    }
}
export default Table