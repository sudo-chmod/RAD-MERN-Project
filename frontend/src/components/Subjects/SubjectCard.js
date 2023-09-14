import React from "react";


function SubjectCard({ subject }) {
    const URL = '/subject/' + subject._id;
    return (
        <div className="container">
            <a href={ URL }>
                <div className="container mt-5">
                    <div className="container rounded bg-white p-3 subject-card ">
                        <div className="d-flex align-items-center ">
                            <img className="rounded-circle mr-3" width="90px" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg" alt="Profile" />
                            <div>
                                <h4 className="font-weight-bold">{subject.title}</h4>
                                <p className="text-black-50">{subject.code}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default SubjectCard;