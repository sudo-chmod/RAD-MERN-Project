import React from "react";
import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function AddSubject() {

    const [ code, setCode ] = useState("")
    const [ yearOfStudy, setYearOfStudy ] = useState("")
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")

    const navigate = useNavigate()

    function sendData(e) {
        e.preventDefault();
        const newSub = {
            code,
            yearOfStudy,
            title,
            description
        }

        axios.post("http://localhost:8080/student/add", newSub)
            .then(() => {
                alert("New Subject is Added!")
                navigate("/admin/subject")
            })
            .catch((err) => {
                alert(err)
            })
    }

    function clearData(e) {
        e.preventDefault();
        setCode("")
        setYearOfStudy("")
        setTitle("")
        setDescription("")
    }


    return (
        <div className="container">
            <form>
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                                <span className="font-weight-bold">Add Subject</span>
                                <div className="mt-5 text-center" style={ { "display": "flex" } }>
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
                                    <h2 className="text-right"><strong>Student Details</strong></h2>

                                </div>

                                <div className="form-border">

                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label htmlFor="code" className="labels">Subject Code</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter Subject Code"

                                                onChange={ (e) => { setCode(e.target.value) } }
                                                value={ code }
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="year" className="labels">Year of Study</label>
                                            <select className="form-control" onChange={ (e) => { setYearOfStudy(e.target.value) } }
                                                value={ yearOfStudy }>
                                                <option value="">Select Year of Study</option>
                                                <option value="1">1st Year</option>
                                                <option value="2">2nd Year</option>
                                                <option value="3">3rd Year</option>
                                                <option value="4">4th Year</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label for="title" className="labels">Title</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter Subject Title"

                                                onChange={ (e) => { setTitle(e.target.value) } }
                                                value={ title }
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label for="description" className="labels">Description</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter Subject Description"

                                                onChange={ (e) => { setDescription(e.target.value) } }
                                                value={ description }
                                            />
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
