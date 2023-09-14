import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function AdminViewStaff() {

    
    const { id } = useParams()
    const navigate = useNavigate()

    const [ staff, setStaff ] = useState({})

    const fetchStaff = async () => {
        await axios.get('http://localhost:8080/staff/' + id)
            .then((response) => {
                setStaff (response.data)
            })
    }

    useEffect(() => { fetchStaff() });

    const handleDelete = async (e) => {
        e.preventDefault();
        await axios.delete('http://localhost:8080/staff/' + id)
            .then(() => {
                alert('Staff deleted successfully')
                navigate('/task')
            })
            .catch((err) => {
                alert(err)
            })
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        navigate('/staff/edit/' + id)
    }

    return (
        <div className="container">
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                            <span className="font-weight-bold">{staff.firstName} </span>
                            <span className="text-black-50">Details</span>
                            <div className="mt-5 text-center">
                                <button className="btn btn-secondary mx-2" onClick={handleEdit}>Edit</button>
                                <button className="btn btn-danger  mx-2" onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">{staff.category}</h4>
                            </div>
                            <div className="form-border">
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Staff ID</label>
                                        <div className="user-details">{staff.stfId}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Category</label>
                                        <div className="user-details">{staff.category}</div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">First Name</label>
                                        <div className="user-details">{staff.firstName}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Last Name</label>
                                        <div className="user-details">{staff.lastName}</div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Gender</label>
                                        <div className="user-details">{staff.gender}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Mobile Number</label>
                                        <div className="user-details">{staff.mobile}</div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">NIC</label>
                                        <div className="user-details">{staff.NIC}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Civil Status</label>
                                        <div className="user-details">{staff.civilStatus}</div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Type</label>
                                        <div className="user-details">{staff.type}t</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Address</label>
                                        <div className="user-details">{staff.address}</div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Salary</label>
                                        <div className="user-details">{staff.salary}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


