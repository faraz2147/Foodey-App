import React, { useState, useEffect } from 'react'

 

const PromotionsWithHooks = () => {

    const [employees, setEmployees] = useState([])

    const [isAPILoaded, setIsAPILoaded] = useState(false)

    const [payload, setPayload] = useState({

        name: "",

        isPromoted: true,

        salary: ""

    })

    const [totalSalaryCredited, setTotalSalaryCredited] = useState(0)

    useEffect(() => {

        fetch('https://jsonblob.com/api/8005ded1-8918-11ea-813a-59c9a55087c0').then(response => response.json()).then(json => {

            setTimeout(() => {

                setEmployees([...json])

                setIsAPILoaded(true)

            }, 2000)

        })

 

    }, []);

    useEffect((prevState) => {

        setTotalSalaryCredited(employees.reduce((acc, item) => acc + parseInt(item.salary), 0))

    }, [employees])

    const updateData = (e, index) => {

        employees[index].isPromoted = e.target.checked;

        setEmployees([...employees])

    }

    const handleInput = (e) => {

        const { value, id } = e.target;

        setPayload({ ...payload, [id]: value } )
    }

    const addEmployee = () => {
        setEmployees([...employees, payload] )

    }

    const deleteEmployees = () => {

        setEmployees([employees.filter(employee => !employee.isPromoted) ])

    }

 

    return (

        <>

            {!isAPILoaded ? (<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" />) : (

                <div>

                    <button type="button" class="btn btn-primary">

                        Total Salary <span class="badge badge-light">${

                            totalSalaryCredited

                        }</span>

                    </button>

                    <div class="container">

                        <div class="jumbotron text-center"><h1>Employee Promotion Details</h1></div>

                        {!employees.length ? (

                            <div class="alert alert-danger" role="alert">

                                No recocds found. Please add new item below                              </div>

                        ) : (

                                <ul>

                                    {employees.map(({ name, isPromoted, salary }, index) =>

                                        <li class="list-group-item ">

                                            <div class="row">

                                                <div class="col-3">{name}</div>

                                                <div class="col-3">${salary}</div>

                                                <div class="col-3"><input type="checkbox" onChange={(e) => updateData(e, index)} defaultChecked={isPromoted}></input>{!!isPromoted ? 'promoted' : 'not promoted'}</div>

                                            </div>

                                        </li>

                                    )}

                                </ul>

                            )}

                    </div>

                    <div className="row">

                        <div class="col">

                            <label htmlFor="ide">Employee Id</label>

                            <input type="text" onChange={(e) => handleInput(e)} className="form-control" id="name" placeholder="Enter name" />

                            <label htmlFor="ide">Salary</label>

                            <input type="text" onChange={(e) => handleInput(e)} className="form-control" id="salary" placeholder="Enter salary" />

                            <button type="button" onClick={() => addEmployee()} className="btn btn-primary">Add</button>

                            <button type="button" onClick={() => deleteEmployees()} className="btn btn-danger">Delete</button>

 

                        </div>

                        <div class="col">

                            <button type="button" class="btn btn-primary">

                                Total Salary <span class="badge badge-light">{

                                    totalSalaryCredited

                                }</span>

                            </button>

                        </div>

                    </div>

                </div>

 

            )}

        </>

    )

}

 

export default PromotionsWithHooks

 