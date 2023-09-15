import React, { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

function EditExam() {

    const { id } = useParams();

    const [ isFetched, setIsFetched ] = useState(false);

    const [ title, setTitle ] = useState("")
    const [ type, setType ] = useState("")
    const [ subject, setSubject ] = useState("")
    const [ yearOfStudy, setYearOfStudy ] = useState("")
    const [ date, setDate ] = useState("")
    const [ startTime, setStartTime ] = useState("")
    const [ endTime, setEndTime ] = useState("")
    const [ location, setLocation ] = useState("")

    const [ halls, setHalls ] = useState([])
    const [ subjects, setSubjects ] = useState([])

    const navigate = useNavigate()

    const FetchExam = async () => {
        await axios.get(`http://localhost:8080/exam/${ id }`)
            .then((response) => {
                setTitle(response.data.response.title)
                setType(response.data.response.type)
                setSubject(response.data.response.subject)
                setYearOfStudy(response.data.response.yearOfStudy)
                setDate(response.data.response.data)
                setStartTime(response.data.response.startTime)
                setEndTime(response.data.response.endTime)
                setLocation(response.data.response.location)
            })
    }

    useEffect(() => {
        if (!isFetched) {
            FetchExam();
            setIsFetched(true);
        }
    }, [ isFetched ]);

    function fetchHalls() {
        axios.get("http://localhost:8080/hall")
            .then((res) => {
                setHalls(res.data.response)
            })
            .catch((err) => {
                alert(err.message)
            })
    }
    function fetchSubjects() {
        axios.get("http://localhost:8080/subject")
            .then((res) => {
                setSubjects(res.data.subject)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    useEffect(() => { fetchHalls() }, [])
    useEffect(() => { fetchSubjects() }, [])


    const update = async (e) => {
        e.preventDefault()

        const updateExam = {
            title,
            type,
            subject,
            yearOfStudy,
            date,
            startTime,
            endTime,
            location
        }

        await axios.put(`http://localhost:8080/exam/edit/${ id }`, updateExam)
            .then(async () => {
                alert("Exam Updated Successfully")
                await axios.post("http://localhost:8080/auth/role")
                    .then((response) => {
                        if (response.data.role === 'admin')
                            navigate("/admin/exam")
                        else
                            navigate("teacher/exam")
                    })
                    .catch((err) => {
                        console.log(err)
                        alert(err)
                    })
            })
            .catch((err) => {
                alert(err.message)
            })


    }

    const cancelation = () => {
        axios.post("http://localhost:8080/auth/role")
            .then((response) => {
                if (response.data.role === 'admin')
                    navigate("/admin/exam")
                else
                    navigate("teacher/exam")
            })
            .catch((err) => {
                console.log(err)
                alert(err)
            })
    }

    return (
        <div className="container">
            <form>
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                                <span className="font-weight-bold">Add Exam</span>
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
                                    <h2 className="text-right"><strong>Exam Details</strong></h2>
                                </div>

                                <div className="form-border">

                                    <div class="form-group">
                                        <label for="subject" className="labels">Exam Title</label>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Enter Exam Title"
                                            onChange={ (e) => { setTitle(e.target.value) } }
                                            value={ title }
                                        />
                                    </div>

                                    <div className="row mt-4">

                                        <div className="col-md-6">
                                            <label for="subject" className="labels">Subject</label>
                                            <select className="form-control" onChange={ (e) => { setSubject(e.target.value) } }
                                                value={ subject }>
                                                <option value="">Select Subject</option>
                                                { subjects.map((subject) => {
                                                    return (
                                                        <option value={ subject._id }>{ subject.title }</option>
                                                    )
                                                }) }
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label for="type" className="labels">Type</label>
                                            <select className="form-control" onChange={ (e) => { setType(e.target.value) } }
                                                value={ type }>
                                                <option value="">Select Exam Type</option>
                                                <option value="Spot Test">Spot Test</option>
                                                <option value="Daily Test">Daily Test</option>
                                                <option value="Weekly Test">Weekly Test</option>
                                                <option value="Monthly Test">Monthly Test</option>
                                                <option value="Mid Semester Exam">Mid Semester Exam</option>
                                                <option value="End Semester Exam">End Semester Exam</option>
                                                <option value="Final Exam">Final Exam</option>
                                            </select>
                                        </div>


                                    </div>

                                    <div className="row mt-4">

                                        <div className="col-md-4">
                                            <label for="date" className="labels">Date</label>
                                            <input type="date"
                                                className="form-control"
                                                onChange={ (e) => { setDate(e.target.value) } }
                                                value={ date }
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label for="start" className="labels">Start Time</label>
                                            <input type="time"
                                                className="form-control"
                                                onChange={ (e) => { setStartTime(e.target.value) } }
                                                value={ startTime }
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label for="end" className="labels">End Time</label>
                                            <input type="time"
                                                className="form-control"
                                                onChange={ (e) => { setEndTime(e.target.value) } }
                                                value={ endTime }
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-md-6">
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

                                        <div className="col-md-6">
                                            <label for="subject" className="labels">Subject</label>
                                            <select className="form-control" onChange={ (e) => { setLocation(e.target.value) } }
                                                value={ location }>
                                                <option value="">Select Location</option>
                                                { halls.map((hall) => {
                                                    return (
                                                        <option value={ hall.code }>{ hall.code }</option>
                                                    )
                                                }) }
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

export default EditExam;