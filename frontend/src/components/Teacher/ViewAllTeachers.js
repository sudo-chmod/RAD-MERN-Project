import React, { useState, useEffect } from "react";
import axios from 'axios';
import TeacherCard from "../Subjects/SubjectCard";


function ViewAllTeachers() {

    const [ teachers, setTeacher ] = useState([]);

    useEffect(() => {
        const getAllTeachers = async () => {
            await axios.get("http://localhost:8080/teacher/")
                .then((response) => {
                    setTeacher(response.data)
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
        getAllTeachers();
    }, []);

    return (
        <div className="container">
            { teachers.map((teacher) => (

                <TeacherCard key={ teacher.tchId } user={ teacher } />

            )) }

        </div>
    )
}

export default ViewAllTeachers;
