import React from 'react'
import axios from 'axios'

export default function ExamCard(exam) {

    let URL = ''
    axios.post("http://localhost:8080/auth/role")
        .then((response) => {
            if (response.data.role === 'admin')
                URL = 'admin/exam/' + exam._id
            else
                URL = 'teacher/exam/' + exam._id
        })
        .catch((err) => {
            console.log(err)
            alert(err)
        })
    
    

    return (
        <div>
            <a href={ URL }>
                <div className="container mt-5">
                    <div className="container rounded bg-white p-3 user-card ">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle mr-3" width="50px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                            <div>
                                <h4 className="font-weight-bold">{ exam.title }</h4>
                                <h6 className="text-black-50">{ exam.subject }</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}