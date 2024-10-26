import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import '../Dashboard/Insidesidebar.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [totaluser,setTotaluser]=useState(0)
  const [totalgrocery,setTotalgrocery]=useState(0)
  const [totalorder,setTotalorder]=useState(0)
  const [totalincome,setTotalincome]=useState(0)

  const nav=useNavigate()

  useEffect(()=>{
    const token=JSON.parse(localStorage.getItem('token'));

    if(!localStorage.getItem('token')){
      nav('/login')
    }


    axios.get('http://localhost:4000/api/project1/user',{headers:{'auth-token':token}})
    .then((res)=>{
      console.log(res.data)
      if(res.data.success){
        setTotaluser((res.data.user).length)
      }
      //console.log(totaluser,58858)
    })
    .catch((err)=>{
      console.log(err)
    })

    axios.get('http://localhost:4000/api/admin/view-order',{headers:{'auth-token':token}})
    .then((res)=>{
      console.log(res.data)
      if(res.data.success){
        setTotalorder((res.data.order).length)
        //console.log(res.data,8888888888888888888888888)

      }
      //console.log(totalorder,55555)
    })
    .catch((err)=>{
      console.log(err)
    })

    axios.get('http://localhost:4000/api/project1/grocery',{headers:{'auth-token':token}})
    .then((res)=>{
      console.log(res.data)
      if(res.data.success){
        setTotalgrocery((res.data.grocery).length)
        //console.log(res.data,9999999999)

      }
     // console.log(totalgrocery,77777777)
    })
    .catch((err)=>{
      console.log(err)
    })

    axios.get('http://localhost:4000/api/project1/payment',{headers:{'auth-token':token}})
    .then((res)=>{
      console.log(res.data,1212121)
      setTotalincome((res.data.payment).length)
    })
    .catch((err)=>{
      console.log(err)

    })
  },[])
  return (
    <>
    <div className="dashboard">
    <Sidebar/>
    <div className="main-dashboard">
        <p>Dashboard</p>
        <hr />
        <p>Dashboard/home</p>
        <h1>Total User -{totaluser}</h1>
        <h1>Total Income -{totalincome}</h1>
        <h1>Total Grocery -{totalgrocery}</h1>
        <h1>Total Order -{totalorder}</h1>
    </div>
    </div>
    
    </>
  )
}
