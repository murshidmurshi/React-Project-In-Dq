import React, { useEffect } from 'react'
import './admin.css'

/* import Login from './Login'
import Register from './Register' */

import Sidebar from './Sidebar';
export default function AdminMain() {
    /* let nav = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            nav('/login')
        }
    }, []) */
    return (
        <>
            {/* <div>
            <Link to={'/login'}> <button>Login Page</button></Link>
            <Link to={'/register'}> <button>Register Page</button></Link>
        </div> */}
            <div className="Admin">
                <Sidebar />

                <div className="Main-Home">
                    <div className="header">
                        <p>Dashboard</p>
                        <hr />
                    </div>
                </div>
            </div>

        </>


    )
}
