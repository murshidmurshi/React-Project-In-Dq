import React, { useState } from 'react'
import '../Login/login.css'

import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
export default function Signup() {
    let nav = useNavigate()
    const [admin, setAdmin] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(admin)
        Axios.post('http://localhost:4000/api/admin/register', admin)
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    alert('Register Succussfully')
                    nav('/login')
                }

 
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            <div className="container">
                <div className="login_con2">
                    <div className="login_container">
                        <div style={{ height: '180px' }} className="welcome">
                            <div className="pages">
                                <p><Link style={{ textDecoration: 'none', color: 'white' }} to={'/login'}>SIGN IN</Link> </p>
                                <p><Link style={{ textDecoration: 'none', color: 'white' }} to={'/register'}>SIGN UP</Link> </p>
                            </div>
                            <h1>Sign Up</h1>

                        </div>
                        <form onSubmit={handleSubmit}>
                            <div style={{ height: "258px" }} className="inside_login">
                                <input onChange={handleChange} type="text" name="name" id="name" placeholder='name' />
                                <input onChange={handleChange} type="number" name="phone" id="phone" placeholder='Phone' />
                                <input onChange={handleChange} type="email" name="email" id="email" placeholder='Email ID' />
                                <input onChange={handleChange} type="password" name="password" id="password" placeholder='Password' />
                                <button type='submit'>Register</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}
