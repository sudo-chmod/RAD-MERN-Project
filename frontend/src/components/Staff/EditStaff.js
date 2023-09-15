import React from "react";
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'

export default function EditStaff() {

    const { id } = useParams();

    const [ isFetched, setIsFetched ] = useState(false);

    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ address, setAddress ] = useState("")
    const [ gender, setGender ] = useState("")
    const [ civilStatus, setCivilStatus ] = useState("")
    const [ mobile, setMobile ] = useState("")
    const [ NIC, setNIC ] = useState("")
    const [ category, setCategory ] = useState("")
    const [ type, setType ] = useState("")
    const [ salary, setSalary ] = useState("")

    const navigate = useNavigate()

    const FetchStaff = async () => {
        await axios.get(`http://localhost:8080/staff/${ id }`)
            .then((response) => {
                console.log(response.data.response)
                setFirstName(response.data.response.firstName);
                setLastName(response.data.response.lastName);
                setMobile(response.data.response.mobile);
                setNIC(response.data.response.NIC);
                setAddress(response.data.response.address);
                setGender(response.data.response.gender)
                setCivilStatus(response.data.response.civilStatus)
                setCategory(response.data.response.category)
                setType(response.data.response.type)
                setSalary(response.data.response.salary)
            })
    }

    useEffect(() => {
        if (!isFetched) {
            FetchStaff();
            setIsFetched(true);
        }
    }, [ isFetched ]);



    const update = async (e) => {
        e.preventDefault()

        const updateStaff = {
            firstName,
            lastName,
            mobile,
            address,
            NIC,
            gender,
            civilStatus,
            category,
            type,
            salary
        }

        await axios.put(`http://localhost:8080/staff/edit/${ id }`, updateStaff)
            .then(() => {
                alert("Staff Member Updated Successfully")
                navigate(`/staff/${ id }`)
            })
            .catch((err) => {
                alert(err.message)
            })


    }

    const cancelation = () => {
        navigate(`/staff/${ id }`)
    }

    return (
        <div className="container">
            <form>
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                                
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
                                    <h2 className="text-right"><strong>Edit Staff Member Details</strong></h2>

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

                                    <div className="row mt-4">
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

                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label htmlFor="gender" className="labels">Gender</label>
                                            <select className="form-control" onChange={ (e) => { setGender(e.target.value) } } value={ gender }>
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="civilState" className="labels">Civil State</label>
                                            <select className="form-control" onChange={ (e) => { setCivilStatus(e.target.value) } } value={ civilStatus }>
                                                <option value="">Select Civil State</option>
                                                <option value="Married">Married</option>
                                                <option value="Un-Married">Un-Married</option>
                                                <option value="Complicated">Complicated</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mt-4">
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

                                    <div className="row mt-4">

                                        <div className="col-md-4">
                                            <label for="category" className="labels">Category</label>
                                            <select className="form-control" onChange={ (e) => { setCategory(e.target.value) } }
                                                value={ category }>
                                                <option value="">Select Category</option>
                                                <option value="Cleark">Cleark</option>
                                                <option value="Cleaning">Cleaning</option>
                                                <option value="Kitchen">Kitchen</option>
                                                <option value="Security">Security</option>
                                            </select>

                                        </div>

                                        <div className="col-md-4">
                                            <label for="type" className="labels">Permenent or Tempory</label>
                                            <select className="form-control" onChange={ (e) => { setType(e.target.value) } }
                                                value={ type }>
                                                <option value="">Select Type</option>
                                                <option value="Permenent">Permenent</option>
                                                <option value="Tempory">Tempory</option>
                                            </select>

                                        </div>
                                        <div className="col-md-4">
                                            <label for="salary" className="labels">Salary</label>
                                            <input type="currency"
                                                className="form-control"
                                                onChange={ (e) => { setSalary(e.target.value) } }
                                                value={ salary }
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
