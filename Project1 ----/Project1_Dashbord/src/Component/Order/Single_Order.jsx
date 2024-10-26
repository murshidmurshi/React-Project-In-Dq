import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




export default function Single_Order() {
    let param=useParams()
    let [display,setDisplay]=useState([])


    useEffect(()=>{
        async function UseEffects(){
            let token=JSON.parse(localStorage.getItem('token'))
            console.log(token,2222223333120)
            axios.get(`http://localhost:4000/api/admin/view-order/${param.id}`,{headers:{'auth-token':token}})
            .then((res)=>{
                console.log(res)
                setDisplay(res.data.order)
            })
            .catch((err)=>{
                console.log(err)
            })


        }
        UseEffects()




    },[])
console.log(display,'display Single Order........................')

    return (
        <>
            <div className="singleOrder">
                <h1>Order Detail</h1>
                <h4>Name:</h4>
                <h4>Phone:</h4>
                <h4>Address:</h4>
                <h4>Pin code:</h4>
                <hr />
                <h1>Grocery:</h1>
                <h3>Grocery Name</h3>
                <h3>Quantity</h3>
                <h3>Price</h3>
                <h3>Sub Total</h3>

                <h4>Grand Total</h4>
            </div>


        </>
    )
}
