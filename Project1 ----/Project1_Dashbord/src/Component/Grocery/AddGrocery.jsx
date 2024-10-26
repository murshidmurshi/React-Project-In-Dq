import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function AddGrocery() {
    const [input, setInput] = useState([])
    const nav = useNavigate()


    const Handlechange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const HandleImage = (e) => {
        setInput({ ...input, image: e.target.files[0] })
        //console.log(input)
    }

    const formdata = new FormData()
    const Submit = (e) => {
        e.preventDefault()
        formdata.append('name', input.name)
        formdata.append('price', input.price)
        formdata.append('description', input.description)
        formdata.append('Myimage', input.image)
        formdata.append('quantity', input.quantity)
        
        console.log(input)

        axios.post('http://localhost:4000/upload',formdata)
        .then((res)=>{
            console.log(res)
            if(res.data.success){
                alert('Successfully Added')
            }
        })
        .catch((err)=>{
            console.log(err)
        })




        // console.log(addgrocery)

        // axios.post('http://localhost:4000/api/project1/addgrocery',addgrocery)
        // .then((res) => {
        //     console.log(res)
        //     if (res.data.success) {
        //         setAddGrocery(res.data.grocery)
        //         alert('Added Grocery Succussfully')
        //         nav('/admin/grocery')
        //     }
        // })
        // .catch((err) => {
        //     console.log(err)

        // })
    }


    return (
        <>
            <div className="dashboard">
                <Sidebar />
                <div className="main-dashboard">
                    <p>Dashboard</p>
                    <hr />

                    <p>Lorloremwfdnjsribus inventore sapiente ab. Voluptate sint cum eos placeat magni excepturi.</p>
                    <div className="form">

                        <form onSubmit={Submit}>
                            <div className="input1">
                                <label>Enter Name</label>
                                <input name='name' onChange={Handlechange} type="text" />
                            </div>
                            <div className="input2">

                                <label>Enter Price</label>
                                <input name='price' onChange={Handlechange} type="text" />
                            </div>
                            <div className="input3">
                                <label>Enter description</label>
                                <input name='description' onChange={Handlechange} type="text" />
                            </div>
                            <div className="input4">
                                <label>Image</label>
                                <input name='image' onChange={HandleImage} type="file" />
                            </div>
                            <div className="input5">
                                <label>Quantity</label>
                                <input name='quantity' onChange={Handlechange} type="text" />
                            </div>
                            <button type='submit'>Submit</button>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

