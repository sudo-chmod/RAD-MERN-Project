import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function AdminViewStudent() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [ student, setStudent ] = useState({})

    const fetchStudent = async () => {
        await axios.get('http://localhost:8080/student/' + id)
            .then((response) => {
                setStudent(response.data)
            })
    }

    useEffect(() => { fetchStudent() });

    const handleDelete = async (e) => {
        e.preventDefault();
        await axios.delete('http://localhost:8080/student/' + id)
            .then(() => {
                alert('Student deleted successfully')
                navigate('/task')
            })
            .catch((err) => {
                alert(err)
            })
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        navigate('/student/edit/' + id)
    }




    return (
        <div className="container">
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                            <span className="font-weight-bold">{student.firstName} {student.lastName}</span>
                            <span className="text-black-50">{student.stdId}</span>
                            <div className="mt-5 text-center">
                                <button className="btn btn-secondary mx-2" type="button" onClick={handleEdit}>Edit</button>
                                <button className="btn btn-danger mx-2" type="button" onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Student Details</h4>
                            </div>
                            <div className="form-border">
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Student ID</label>
                                        <div className="user-details">{student.stdId}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Email</label>
                                        <div className="user-details">{student.email}</div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">First Name</label>
                                        <div className="user-details">{student.firstName}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Last Name</label>
                                        <div className="user-details">{student.lastName}</div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="labels">Address</label>
                                    <div className="user-details">{student.address}</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className="labels">Mobile Number</label>
                                        <div className="user-details">{student.mobile}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">National ID Card Number</label>
                                        <div className="user-details">{student.NIC}</div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className="labels">Gender</label>
                                        <div className="user-details">{student.gender}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Date of Birth</label>
                                        <div className="user-details">{student.DOB}</div>
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