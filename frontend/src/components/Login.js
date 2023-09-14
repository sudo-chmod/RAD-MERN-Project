import React from "react";
import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'


function Login() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const user = {
            email: email,
            password: password
        }

        await axios.post("http://localhost:8080/auth/login", user)
            .then((response) => {
                if (response.data.OK === true) {
                    alert(response.data.status)
                    if (response.data.role === 'admin') {
                        navigate('/admin-dashboard')
                    } else if (response.data.role === 'teacher') {
                        navigate('/teacher-dashboard')
                    } else {
                        navigate('/student-dashboard')
                    }
                } else {
                    alert(response.data)
                    console.log(response)
                }
            })
            .catch((err) => {
                alert(err)
            })


    }

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={ { borderRadius: "1rem" } }>
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Sign in</h3>

                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        id="typeEmailX-2"
                                        className="form-control form-control-lg"
                                        placeholder="Email"
                                        onChange={ (e) => setEmail(e.target.value) }
                                        value={ email}
                                    />
                                </div>

                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                
                                        className="form-control form-control-lg input-line"
                                        placeholder="Password"
                                        onChange={ (e) => setPassword(e.target.value) }
                                        value={ password }/>
                                </div>

                                <button className="btn btn-primary btn-lg profile-button btn-block" type="submit" onClick={handleSubmit}>Login</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;