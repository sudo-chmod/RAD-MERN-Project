import React from "react";

function TeacherCard({ teacher }) {
    const URL = '/teacher/' + teacher._id

    return (
        <div className="container">
            <a href={ URL }>
                <div className="container mt-5">
                    <div className="container rounded bg-white p-3 teacher-card ">
                        <div className="d-flex align-items-center ">
                            <img className="rounded-circle mr-3" width="50px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                            <div>
                                <h4 className="font-weight-bold">{ teacher.firstName }</h4>
                                <p className="text-black-50">{ teacher.title }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default TeacherCard;