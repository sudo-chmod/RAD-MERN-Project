import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios';


export default function ViewHall() {
    const { id } = useParams()

    const [ hall, setHall ] = useState({})

    const fetchTeacher = async () => {
        await axios.get('http://localhost:8080/hall/' + id)
            .then((response) => {
                setHall(response.data)
            })
    }

    useEffect(() => { fetchTeacher() });

    return (
        <div className="container">
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Hall Details</h4>
                            </div>
                            <div className="form-border">
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Code</label>
                                        <div className="user-details">{hall.code}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Capacity</label>
                                        <div className="user-details">{hall.capacity}</div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Floor</label>
                                        <div className="user-details">{hall.floor}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Type</label>
                                        <div className="user-details">{hall.type}</div>
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


