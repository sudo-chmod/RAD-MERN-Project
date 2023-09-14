import React from "react";
import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'


function AddTeacher() {

    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ mobile, setMobile ] = useState("")
    const [ NIC, setNIC ] = useState("")
    const [ address, setAddress ] = useState("")
    const [ qualifications, setQualifications ] = useState("")
    const [ sex, setSex ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ email, setEmail ] = useState("")

    const navigate = useNavigate()

    function sendData(e) {
        e.preventDefault();
        const newTeacher = {
            firstName,
            lastName,
            mobile,
            address,
            qualifications,
            sex,
            email,
            password,
            NIC
        }

        axios.post("http://localhost:8080/teacher/add", newTeacher)
            .then(() => {
                alert("New Teacher is Added!")
                navigate("/teacher")
            })
            .catch((err) => {
                alert(err)
            })
    }

    function clearData(e) {
        e.preventDefault();
        setFirstName("")
        setLastName("")
        setMobile("")
        setNIC("")
        setAddress("")
        setQualifications("")
        setSex("")
        setPassword("")
        setEmail("")
    }


return (
    <div className="container">
        <form>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                            <span className="font-weight-bold">Add Teacher</span>
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
                                <h4 className="text-right">Teacher Details</h4>
                            </div>

                            <div className="form-border">
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="labels">Email</label>
                                        <input type="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            id="email"
                                            onChange={ (e) => { setEmail(e.target.value) } }
                                            value={ email }
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="password" className="labels">Password</label>
                                        <input type="password"
                                            className="form-control"
                                            placeholder="Enter Password"
                                            id="password"
                                            onChange={ (e) => { setPassword(e.target.value) } }
                                            value={ password }
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr />
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

                                <div class="form-group">
                                    <label for="address" className="labels">Address</label>
                                    <input type="email"
                                        className="form-control"
                                        placeholder="Enter Address"
                                        id="email"
                                        onChange={ (e) => { setAddress(e.target.value) } }
                                        value={ address }
                                    />
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label htmlFor="phoneNumber" className="labels">Mobile Number</label>
                                        <input type="email"
                                            className="form-control"
                                            placeholder="Enter Mobile Number"
                                            id="email"
                                            onChange={ (e) => { setMobile(e.target.value) } }
                                            value={ mobile }
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="state" className="labels">NIC Number</label>
                                        <input type="email"
                                            className="form-control"
                                            placeholder="Enter NIC Number"
                                            id="email"
                                            onChange={ (e) => { setNIC(e.target.value) } }
                                            value={ NIC }
                                        />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label htmlFor="gender" className="labels">Sex</label>
                                        <select className="form-control" id="gender" onChange={ (e) => { setSex(e.target.value) } } value={ sex }>
                                            <option value="">Select Sex</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="highestQualification" className="labels">Qualification</label>
                                        <select className="form-control" id="highestQualification" onChange={ (e) => { setQualifications(e.target.value) } } value={ qualifications }>
                                            <option value="">Select your highest Qualification</option>
                                            <option value="Ph.D. in Education">Ph.D. in Education</option>
                                            <option value="Master of Education (M.Ed.)">Master of Education (M.Ed.)</option>
                                            <option value="Master of Arts in Education (MA Education)">Master of Arts in Education (MA Education)</option>
                                            <option value="Master of Science in Education (MSc Education)">Master of Science in Education (MSc Education)</option>
                                            <option value="Master of Philosophy in Education (MPhil Education)">Master of Philosophy in Education (MPhil Education)</option>
                                            <option value="Doctor of Education (Ed.D.)">Doctor of Education (Ed.D.)</option>
                                            <option value="Postgraduate Diploma in Education">Postgraduate Diploma in Education</option>
                                            <option value="Postgraduate Certificate in Education (PGCE)">Postgraduate Certificate in Education (PGCE)</option>
                                            <option value="Bachelor of Education (B.Ed.)">Bachelor of Education (B.Ed.)</option>
                                            <option value="Bachelor of Arts in Education (BA Education)">Bachelor of Arts in Education (BA Education)</option>
                                            <option value="Bachelor of Science in Education (BSc Education)">Bachelor of Science in Education (BSc Education)</option>
                                            <option value="Diploma in Education">Diploma in Education</option>
                                            <option value="Vidyapeetha (Equivalent to a Diploma or Certificate in Education)">Vidyapeetha (Equivalent to a Diploma or Certificate in Education)</option>
                                            <option value="Other">Other</option>
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

export default AddTeacher;

