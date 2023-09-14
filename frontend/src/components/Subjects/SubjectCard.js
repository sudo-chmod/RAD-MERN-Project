import React from "react";

function SubjectCard({ subject }) {
    const URL = '/subject/' + subject._id

    return (
        <div className="container">
            <a href={ URL }>
                <div className="container mt-5">
                    <div className="container rounded bg-white p-3 subject-card ">
                        <div className="d-flex align-items-center ">
                            <img className="rounded-circle mr-3" width="50px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                            <div>
                                <h4 className="font-weight-bold">{ subject.code }</h4>
                                <p className="text-black-50">{ subject.title }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default SubjectCard;