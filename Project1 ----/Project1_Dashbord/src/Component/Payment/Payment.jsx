import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Payment() {
    const[payment,setPayment]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/api/project1/payment')
        .then((res)=>{
            console.log(res)
            if(res.data.success){
                setPayment(res.data.payment)
            }
        })
        .catch((err)=>{
            console.log(err)

        })
    },[])
  return (
    <>
         <div className="dashboard">
                <Sidebar />
                <div className="main-dashboard">
                    <p>Dashboard</p>
                    <hr />
                    <p>Payment/table</p>

                    <p>Lorloremwfdnjsribus inventore sapiente ab. Voluptate sint cum eos placeat magni excepturi.</p>

                    <div className="table">
                        <table border={1}>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Order Id</th>
                                <th>Payment Type</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Address</th>
                                <th>Date</th>
                            </tr>
                            {payment.map((item,index)=>{
                                return(
                                    <tr>
                                <th>{index+1}</th>
                                <th>{item.user_id.username}</th>
                                <th>{item.user_id.phone}</th>
                                <th>{item.order_id}</th>
                                <th>{item.payment_type}</th>
                                <th>{item.status}</th>
                                <th>{item.total}</th>
                                <th>{item.user_id.address}</th>
                                <th>{item.date}</th>
                            </tr>
                                )
                            })}
                            
                            
                        </table>
                    </div>

                    {/* <Link to={'/admin/add_grocery'}><button></button></Link> */}
                </div>
            </div>
    </>
  )
}
