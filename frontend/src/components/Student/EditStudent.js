import React from "react";
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'

function EditStudent() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [ isFetched, setIsFetched ] = useState(false);

    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ mobile, setMobile ] = useState("")
    const [ NIC, setNIC ] = useState("")
    const [ address, setAddress ] = useState("")
    const [ yearOfStudy, setYearOfStudy ] = useState("")
    const [ DOB, setDOB ] = useState("")
    const [ gender, setGender ] = useState("")

    const FetchStudent = async () => {
        await axios.get(`http://localhost:8080/student/${ id }`)
            .then((response) => {
                setFirstName(response.data.response.firstName);
                setLastName(response.data.response.lastName);
                setMobile(response.data.response.mobile);
                setNIC(response.data.response.NIC);
                setAddress(response.data.response.address);
                setYearOfStudy(response.data.response.yearOfStudy);
                setDOB(response.data.response.DOB);
                setGender(response.data.response.gender)
            })
    }

    useEffect(() => {
        if (!isFetched) {
            FetchStudent();
            setIsFetched(true);
        }
    }, [ isFetched ]);



    const update = async (e) => {
        e.preventDefault()

        const updateStudent = {
            firstName,
            lastName,
            mobile,
            address,
            NIC,
            yearOfStudy,
            DOB,
            gender
        }

        await axios.put(`http://localhost:8080/student/edit/${ id }`, updateStudent)
            .then(() => {
                alert("Student Updated Successfully")
                navigate(`/student/${ id }`)
            })
            .catch((err) => {
                alert(err.message)
            })


    }

    const cancelation = () => {
        navigate(`/student/${ id }`)
    }

    return (
        <div className="container">
            <form>
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                                <span className="font-weight-bold">Add Student</span>
                                <div className="mt-5 text-center" style={ { "display": "flex" } }>
                                    <div>
                                        <button className="btn btn-primary submit-button mx-4" onClick={ update }>Update</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary clear-button mx-4" onClick={ cancelation }>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">

                            <div className="p-3 py-5">
                                
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h2 className="text-right"><strong>Edit Student Details</strong></h2>

                                </div>

                                <div className="form-border">

                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label htmlFor="firstName" className="labels">First Name</label>
                                            <input type="email"
                                                className="form-control"
                                                placeholder="Enter First Name"
                                                id="email"
                                                onChange={ (e) => { setFirstName(e.target.value) } }
                                                value={ firstName }
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="lastName" className="labels">Last Name</label>
                                            <input type="email"
                                                className="form-control"
                                                placeholder="Enter Last Name"
                                                id="email"
                                                onChange={ (e) => { setLastName(e.target.value) } }
                                                value={ lastName }
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label for="address" className="labels">Address</label>
                                            <input type="email"
                                                className="form-control"
                                                placeholder="Enter Address"
                                                id="email"
                                                onChange={ (e) => { setAddress(e.target.value) } }
                                                value={ address }
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label htmlFor="phoneNumber" className="labels">Mobile Number</label>
                                            <input type="email"
                                                className="form-control"
                                                placeholder="Enter Mobile Number"
                                                maxLength={ 10 }
                                                onChange={ (e) => { setMobile(e.target.value) } }
                                                value={ mobile }
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="state" className="labels">NIC Number</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter NIC Number"
                                                maxLength={ 12 }
                                                onChange={ (e) => { setNIC(e.target.value) } }
                                                value={ NIC }
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-4">
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
                                        <div className="col-md-4">
                                            <label htmlFor="dob" className="labels">DOB</label>
                                            <input type="date"
                                                className="form-control"
                                                onChange={ (e) => { setDOB(e.target.value) } } value={ DOB }
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="gender" className="labels">Gender</label>
                                            <select className="form-control" id="gender" onChange={ (e) => { setGender(e.target.value) } } value={ gender }>
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
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
