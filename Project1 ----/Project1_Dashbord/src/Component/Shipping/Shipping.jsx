import React, { useEffect,useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import axios from 'axios'
export default function Shipping() {
    const[shipping,setShipping]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/api/project1/shipping')
        .then((res)=>{
            if(res.data.success){
                console.log(res.data.shipping,4444444)
                setShipping(res.data.shipping)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    //console.log(shipping)
  return (
    <>
         <div className="dashboard">
                <Sidebar />
                <div className="main-dashboard">
                    <p>Dashboard</p>
                    <hr />
                    <p>Shipping/table</p>

                    <p>Lorloremwfdnjsribus inventore sapiente ab. Voluptate sint cum eos placeat magni excepturi.</p>

                    <div className="table">
                        <table border={1}>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>cart_id</th>
                                <th>grocery_id</th>
                                <th>pincode</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                            {shipping.map((item,index)=>{
                                return(
                                    <tr>
                                <th>{index+1}</th>
                                <th>{item.name}</th>
                                <th>{item.cart_id[0]}</th>
                                <th>{item.grocery_id[0]}</th>
                                <th>{item.pin_code}</th>
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
