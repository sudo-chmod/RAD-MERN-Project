import React from "react";

function ViewSubject() {
    return (
        <div className="container">
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Subject Details</h4>
                            </div>
                            <div className="form-border">
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Subject Name</label>
                                        <div className="user-details">Mathematics</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Year of Study</label>
                                        <div className="user-details">2nd Year</div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <label className="labels">Description</label>
                                        <div className="user-details">Description of the subject goes here.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewSubject;

