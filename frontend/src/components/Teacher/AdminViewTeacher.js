import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function AdminViewTeacher() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [ teacher, setTeacher ] = useState({})

    const fetchTeacher = async () => {
        await axios.get('http://localhost:8080/teacher/' + id)
            .then((response) => {
                setTeacher(response.data)
            })
    }

    useEffect(() => { fetchTeacher() });

    const handleDelete = async (e) => {
        e.preventDefault();
        await axios.delete('http://localhost:8080/teacher/' + id)
            .then(() => {
                alert('Teacher deleted successfully')
                navigate('/task')
            })
            .catch((err) => {
                alert(err)
            })
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        navigate('/teacher/edit/' + id)
    }
    return (
        <div className="container">
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                            <span className="font-weight-bold">{ teacher.firstName } { teacher.lastName }</span>
                            <span className="text-black-50">{ teacher.tchId }</span>
                            <div className="mt-5 text-center">
                                <button className="btn btn-secondary mx-2" onClick={ handleEdit }>Edit</button>
                                <button className="btn btn-danger  mx-2" onClick={ handleDelete }>Delete</button>
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
                                        <label className="labels">Teacher ID</label>
                                        <div className="user-details">{ teacher.tchId }</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Email</label>
                                        <div className="user-details">{ teacher.email }</div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">First Name</label>
                                        <div className="user-details">{ teacher.firstName }</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Last Name</label>
                                        <div className="user-details">{ teacher.lastName }</div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="labels">Address</label>
                                    <div className="user-details">{ teacher.address }</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className="labels">Mobile Number</label>
                                        <div className="user-details">{ teacher.mobile }</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">National ID Card Number</label>
                                        <div className="user-details">{ teacher.NIC }</div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className="labels">Sex</label>
                                        <div className="user-details">{ teacher.sex }</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Qualification</label>
                                        <div className="user-details">{ teacher.qualification }</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
