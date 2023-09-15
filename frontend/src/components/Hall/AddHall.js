import React from "react";
import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function AddHall() {

    const [ code, setCode ] = useState("")
    const [ capacity, setCapacity ] = useState("")
    const [ floor, setFloor ] = useState("")
    const [ type, setType ] = useState("")

    const navigate = useNavigate()

    function sendData(e) {
        e.preventDefault();
        const newHall = {
            code,
            capacity,
            floor,
            type
        }

        axios.post("http://localhost:8080/hall/add", newHall)
            .then(() => {
                alert("New Hall is Added!")
                navigate("/admin/hall")
            })
            .catch((err) => {
                alert(err)
            })
    }

    function clearData(e) {
        e.preventDefault();
        setCode("")
        setCapacity("")
        setFloor("")
        setType("")
    }


    return (
        <div className="container">
            <form>
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                                <span className="font-weight-bold">Add Hall</span>
                                <div className="mt-3 text-center" style={ { "display": "flex" } }>
                                    <div>
                                        <button className="btn btn-primary submit-button mx-4" onClick={ sendData }>Save</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary clear-button mx-4" onClick={ clearData }>Clear</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">

                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h2 className="text-right"><strong>Hall Details</strong></h2>
                                </div>

                                <div className="form-border">
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label for="code" className="labels">Code</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter Hall Code"
                                                onChange={ (e) => { setCode(e.target.value) } }
                                                value={ code }
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label for="password" className="labels">Capacity</label>
                                            <input type="number"
                                                className="form-control"
                                                placeholder="Select Hall Capacity"
                                                onChange={ (e) => { setCapacity(e.target.value) } }
                                                value={ capacity }
                                            />
                                        </div>

                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label for="floor" className="labels">Floor</label>
                                            <select className="form-control" onChange={ (e) => { setFloor(e.target.value) } }
                                                value={ floor }>
                                                <option value="">Select Floor Number</option>
                                                <option value="Ground Floor">Ground Floor</option>
                                                <option value="1st Floor">1st Floor</option>
                                                <option value="2nd Floor">2nd Floor</option>
                                                <option value="3rd Floor">3rd Floor</option>
                                                <option value="4th Floor">4th Floor</option>
                                                <option value="5th Floor">5th Floor</option>
                                                
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label for="type" className="labels">Type</label>
                                            <select className="form-control" onChange={ (e) => { setType(e.target.value) } }
                                                value={ type }>
                                                <option value="">Select Hall Type</option>
                                                <option value="A/C">A/C</option>
                                                <option value="Non A/C">Non A/C</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </div>

    );
}
