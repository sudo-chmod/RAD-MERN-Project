import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios';

function ViewExam() {

    const { id } = useParams()
    const [ exam, setExam ] = useState({})

    const fetchExam = async () => {
        await axios.get('http://localhost:8080/exam/' + id)
            .then((response) => {
                setExam(response.data)
            })
    }

    useEffect(() => { fetchExam() });

    return (
        <div className="container">
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Exam Details</h4>
                            </div>
                            <div className="form-border">
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Title</label>
                                        <div className="user-details">{exam.title}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Type</label>
                                        <div className="user-details">{exam.type}</div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Subject</label>
                                        <div className="user-details">{exam.subject}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Year of Study</label>
                                        <div className="user-details">{exam.yearOfStudy}</div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Date</label>
                                        <div className="user-details">{exam.date}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Start Time</label>
                                        <div className="user-details">{exam.startTime}</div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">End Time</label>
                                        <div className="user-details">{exam.endTime}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Location</label>
                                        <div className="user-details">{exam.location}</div>
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

export default ViewExam;
