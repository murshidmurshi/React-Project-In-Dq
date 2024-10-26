import React, { useState } from 'react'
import '../Login/login.css'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'

export default function Login() {
  let nav = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    Axios.post('http://localhost:4000/api/admin/login', user)
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          localStorage.setItem('token', JSON.stringify(res.data.authToken))
          alert('Login Succuss')
          nav('/')
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
          <div className="Login">

            <div className="welcome">
              <div className="pages">
                <p><Link style={{ textDecoration: 'none', color: 'white' }} to={'/login'}>SIGN IN</Link> </p>
                <p><Link style={{ textDecoration: 'none', color: 'white' }} to={'/register'}>SIGN UP</Link> </p>
              </div>
              <h1>WELCOME </h1>
              <h1>to the Website </h1>
              <p>Enter below, Email Id with Correct Password</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={{bottom:'28px'}} className="inside_login">

                <input onChange={handleChange} type="email" name="email" id="email" placeholder='Email ID' />
                <input onChange={handleChange} type="password" name="password" id="password" placeholder='Password' />
                <button type='submit'>Login</button>
                <p style={{ textDecoration: 'underline', }}>Forget password?</p>
              </div>

            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
