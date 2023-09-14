import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export default function EditTeacher() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [ isFetched, setIsFetched ] = useState(false);

    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ mobile, setMobile ] = useState("");
    const [ NIC, setNIC ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ qualifications, setQualifications ] = useState("");
    const [ sex, setSex ] = useState("");

    const FetchTeacher = async () => {
        await axios.get(`http://localhost:8080/teacher/${ id }`)
            .then((response) => {
                setFirstName(response.data.Teacher.firstName);
                setLastName(response.data.Teacher.lastName);
                setMobile(response.data.Teacher.mobile);
                setNIC(response.data.Teacher.NIC);
                setAddress(response.data.Teacher.address);
                setQualifications(response.data.Teacher.qualifications);
                setSex(response.data.Teacher.sex)
            })
    }

    useEffect(() => {
        if (!isFetched) {
            FetchTeacher();
            setIsFetched(true);
        }
    }, [ isFetched ]);



    const update = async (e) => {
        e.preventDefault()

        const updateTeacher = {
            firstName,
            lastName,
            mobile,
            address,
            qualifications,
            sex,
            NIC
        }

        await axios.put(`http://localhost:8080/teacher/edit/${ id }`, updateTeacher)
            .then(() => {
                alert("Teacher Updated Successfully")
                navigate(`/teacher/${ id }`)
            })
            .catch((err) => {
                alert(err.message)
            })


    }

    const cancelation = () => {
        navigate(`/teacher/${ id }`)
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
                                    <h2 className="text-right"><strong>Edit Teacher Details</strong></h2>

                                </div>

                                <div className="form-border">

                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label htmlFor="firstName" className="labels">First Name</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter First Name"

                                                onChange={ (e) => { setFirstName(e.target.value) } }
                                                value={ firstName }
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="lastName" className="labels">Last Name</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter Last Name"

                                                onChange={ (e) => { setLastName(e.target.value) } }
                                                value={ lastName }
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label for="address" className="labels">Address</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter Address"

                                                onChange={ (e) => { setAddress(e.target.value) } }
                                                value={ address }
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label htmlFor="mobile" className="labels">Mobile Number</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter Mobile Number"
                                                maxLength={ 10 }
                                                onChange={ (e) => { setMobile(e.target.value) } }
                                                value={ mobile }
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="nic" className="labels">NIC Number</label>
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

    )
}