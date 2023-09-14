import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentCard from "./StudentCard";


function ViewAllStudents() {

    const [ students, setstudents ] = useState([]);
    const getAllStudents = async () => {
        await axios.get("http://localhost:8080/student/")
            .then((response) => {
                setstudents(response.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    useEffect(() => {
        getAllStudents();
    }, []);

    return (
        <div className="container">
            { students.map((student) => (
                <StudentCard key={ student.stdId } user={ student } />
            ))
            }
        </div>
    )
}

export default ViewAllStudents;
