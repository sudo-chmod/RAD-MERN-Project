import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ViewSubject() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [ subject, setSubject ] = useState({})

    const fetchSubject = async () => {
        await axios.get('http://localhost:8080/subject/' + id)
            .then((response) => {
                setSubject(response.data)
            })
    }

    useEffect(() => { fetchSubject() });

    const handleDelete = async (e) => {
        e.preventDefault();
        await axios.delete('http://localhost:8080/subject/' + id)
            .then(() => {
                alert('Subject deleted successfully')
                navigate('/task')
            })
            .catch((err) => {
                alert(err)
            })
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        navigate('/subject/edit/' + id)
    }




    return (
        <div className="container">
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Subject Details</h4>
                                <div className="mt-5 text-center">
                                    <button className="btn btn-secondary mx-2" type="button" onClick={handleEdit}>Edit</button>
                                    <button className="btn btn-danger  mx-2" type="button" onClick={handleDelete}>Delete</button>
                                </div>
                            </div>
                            <div className="form-border">
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Subject Name</label>
                                        <div className="user-details">{subject.title}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Year of Study</label>
                                        <div className="user-details">{subject.yearOfStudy}</div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <label className="labels">Description</label>
                                        <div className="user-details">{subject.description}</div>
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


