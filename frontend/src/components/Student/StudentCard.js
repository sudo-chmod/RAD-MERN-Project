import React from "react";

function StudentCard({ user }) {
    const URL = '/student/' + user._id

    return (
        <div>
            <a href={ URL }>
                <div className="container mt-5">
                    <div className="container rounded bg-white p-3 user-card ">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle mr-3" width="50px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                            <div>
                                <h4 className="font-weight-bold">{ user.firstName } { user.lastName }</h4>
                                <h6 className="text-black-50">{ user.stdId }</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default StudentCard;