import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function EditTeacher() {
 
    const { id } = useParams();
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ mobile, setMobile ] = useState("");
    const [ NIC, setNIC ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ qualifications, setQualifications ] = useState("");
    const [ sex, setSex ] = useState("");

    const getTeachersDetails = async () => {
        await axios.get(`http://localhost:8080/teacher/${ id }`)
            .then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setMobile(response.data.mobile);
                setNIC(response.data.NIC);
                setAddress(response.data.address);
                setQualifications(response.data.qualifications);
                setSex(response.data.sex)
            })
        }

    const updateTeacher = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/teacher/update/${ id }`, {
                firstName,
                lastName,
                mobile,
                address,
                qualifications,
                sex,
                NIC
            });
            alert("Teacher updated successfully");
            window.location.href = "/";
        } catch (err) {
            alert("Error updating teacher");
        }
    }
    return (
        <div>

        </div>
    )
}