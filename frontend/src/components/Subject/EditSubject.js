import React from "react";
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'

export default function EditSubject() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [isFetched, setIsFetched] = useState(false);

    const [code, setCode] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [yearOfStudy, setYearOfStudy] = useState("")

    const FetchSubject = async () => {
        await axios.get(`http://localhost:8080/subject/${id}`)
            .then((response) => {
                setCode(response.data.response.code);
                setTitle(response.data.response.title);
                setDescription(response.data.response.description);
                setYearOfStudy(response.data.response.yearOfStudy);

            })
    }

    useEffect(() => {
        if (!isFetched) {
            FetchSubject();
            setIsFetched(true);
        }
    }, [isFetched]);



    const update = async (e) => {
        e.preventDefault()

        const updateSubject = {
            code,
            title,
            description,
            yearOfStudy,

        }

        await axios.put(`http://localhost:8080/subject/edit/${id}`, updateSubject)
            .then(() => {
                alert("Subject Updated Successfully")
                navigate(`/subject/${id}`)
            })
            .catch((err) => {
                alert(err.message)
            })


    }

    const cancelation = () => {
        navigate(`/subject/${id}`)
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
                                <div className="mt-5 text-center" style={{ "display": "flex" }}>
                                    <div>
                                        <button className="btn btn-primary submit-button mx-4" onClick={update}>Update</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary clear-button mx-4" onClick={cancelation}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">

                            <div className="p-3 py-5">

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h2 className="text-right"><strong>Edit Subject Details</strong></h2>

                                </div>

                                <div className="form-border">

                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label htmlFor="code" className="labels">Code</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter Subject Code"
                                                onChange={(e) => { setCode(e.target.value) }}
                                                value={code}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="title" className="labels">Title</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter Subject Title"
                                                onChange={(e) => { setTitle(e.target.value) }}
                                                value={title}
                                            />
                                        </div>
                                    </div>


                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label htmlFor="description" className="labels">Description</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter Description"
                                                onChange={(e) => { setDescription(e.target.value) }}
                                                value={description}
                                            />
                                        </div>
                                    </div >
                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <label for="year" className="labels">Year of Study</label>
                                            <select className="form-control" onChange={(e) => { setYearOfStudy(e.target.value) }}
                                                value={yearOfStudy}>
                                                <option value="">Select Year of Study</option>
                                                <option value="1">1st Year</option>
                                                <option value="2">2nd Year</option>
                                                <option value="3">3rd Year</option>
                                                <option value="4">4th Year</option>
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
