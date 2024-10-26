import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Message() {

    const [contact2, setContact2] = useState([]);

   // const [delet, setDelete] = useState([]);



    const onDelete = (item) => {
        setContact2(contact2.filter((e)=>{
            //console.log('DELLLLLLLLLLLEte')
            return e!==item
        }))
        // setContact2(...contact2,)
    }
    useEffect(() => {
        axios.get('http://localhost:4000/api/project1/contact2')
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setContact2(res.data.contact2)

                }
                console.log(contact2)
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
                    <p>Message/table</p>

                    <p>Lorloremwfdnjsribus inventore sapiente ab. Voluptate sint cum eos placeat magni excepturi.</p>

                    <div className="table">
                        <table border={1}>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Message</th>
                                <th>Email</th>
                                <th>View</th>
                                <th>Delete</th>
                            </tr>
                            {contact2.length==0&&'No Data'}
                            {contact2.map((item, index) => {
                                return (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <th>{item.name}</th>
                                        <th>{item.message}</th>
                                        <th>{item.email}</th>
                                        <th><button style={{ borderRadius: '15px', backgroundColor: '#aaaadf' }}>View</button></th>
                                        <th><button style={{ borderRadius: '15px', backgroundColor: '#ec5656' }} onClick={()=>onDelete(item)}>Delete</button></th>
                                    </tr>
                                )
                            })}


                        </table>
                    </div>

                    {/* <Link to={'/admin/add_grocery'}><button>Add Grocery</button></Link> */}
                </div>
            </div>
        </>
    )
}
