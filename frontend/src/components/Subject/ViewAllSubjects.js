import React, { useState, useEffect } from "react";
import axios from 'axios';
import SubjectCard from "./SubjectCard";


function ViewAllSubjects() {

    const [ subjects, setSubject ] = useState([]);

    useEffect(() => {
        const getViewAllSubjects = async () => {
            await axios.get("http://localhost:8080/subject/")
                .then((response) => {
                    setSubject(response.data)
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
        getViewAllSubjects();
    }, []);

    return (
        <div className="container">
            { subjects.map((subject) => (

                <SubjectCard key={ subject.subId } subject={ subject } />

            )) }

        </div>
    )
}

export default ViewAllSubjects;
