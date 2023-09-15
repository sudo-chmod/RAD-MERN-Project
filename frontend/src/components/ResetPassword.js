import React from "react";
import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'


function ResetPassword() {

    const [ password, setPassword ] = useState('')
    const [ newPassword, setNewPassword ] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            password,
            newPassword
        }

        await axios.post("http://localhost:8080/auth/reset-password", user)
            .then(async(response) => {
                if (response.data.status === true) {
                    alert(response.data.message)
                    await axios.post("http://localhost:8080/auth/logout")
                    navigate('/login')
                } else {
                    alert(response.data.message)
                }
            })
            .catch((err) => {
                alert(err)
            })


    }

    return (
        < section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={ { borderRadius: "2rem" } }>
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Change Password</h3>

                                <div>
                                    <input
                                        type="password"

                                        className="form-control form-control-lg input-line"
                                        placeholder="Password"
                                        onChange={ (e) => setPassword(e.target.value) }
                                        value={ password } />
                                </div>
                                <br />

                                <div>
                                    <input
                                        type="password"

                                        className="form-control form-control-lg input-line"
                                        placeholder="New Password"
                                        onChange={ (e) => setNewPassword(e.target.value) }
                                        value={ newPassword } />
                                </div>
                                <br />
                                <br />

                                <button className="btn btn-primary btn-lg profile-button btn-block" type="submit" onClick={ handleSubmit }>Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResetPassword;