import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Groceries() {
    const[grocery,setGrocery]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/api/project1/grocery')
        .then((res)=>{
            console.log(res)
            if(res.data.success){
                setGrocery(res.data.grocery)
            }
        })
        .catch((err)=>{
            console.log(err)

        })
    },[])

    /* useEffect(()=>{
        axios.get('http://localhost:4000/upload/')
    },[]) */
  return (
    <>
         <div className="dashboard">
                <Sidebar />
                <div className="main-dashboard">
                    <p>Dashboard</p>
                    <hr />
                    <p>Grocery/table</p>

                    <p>Lorloremwfdnjsribus inventore sapiente ab. Voluptate sint cum eos placeat magni excepturi.</p>

                    <div className="table">
                        <table border={1}>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Date</th>
                            </tr>
                            {grocery.map((item,index)=>{
                                return(
                                    <tr>
                                <th>{index+1}</th>
                                <th>{item.name}</th>
                                <th>{item.price}</th>
                                <th><img style={{height:'90px', width:'106px'}} src={`http://localhost:4000/upload/${item.image}`} alt="" /></th>
                                <th>{item.description}</th>
                                <th>{item.quantity}</th>
                                <th>{item.date}</th>
                            </tr>
                                )
                            })}
                            
                            
                        </table>
                    </div>

                    <Link to={'/admin/add_grocery'}><button>Add Grocery</button></Link>
                </div>
            </div>
    </>
  )
}
