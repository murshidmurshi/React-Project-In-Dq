import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import axios from 'axios'
export default function User() {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/api/project1/user')
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setUser(res.data.user)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div className="dashboard">
                <Sidebar />
                <div className="main-dashboard">
                    <p>Dashboard</p>
                    <hr />
                    <p>Dashboard/User</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus inventore sapiente ab. Voluptate sint cum eos placeat magni excepturi.</p>

                    <div className="table">
                        <table border={1}>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                            {user.map((item,index)=>{
                                return(
                                    <tr>
                                <th>{index+1}</th>
                                <th>{item.username}</th>
                                <th>{item.email}</th>
                                <th>{item.phone}</th>
                                <th>{item.address}</th>
                            </tr>
                                )
                            })}
                            
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
