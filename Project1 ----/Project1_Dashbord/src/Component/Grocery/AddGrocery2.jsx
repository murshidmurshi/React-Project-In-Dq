import React from 'react'
import './Grocery.css'
import { useState } from 'react'
import axios from 'axios'

export default function AddGrocery2() {
    const [input, setInput] = useState([{
        name: '',
        type: '',
        price: '',
        image: '',
    }])

    const Handlechange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const imageHandle = (e) => {
        setInput({ ...input,image: e.target.files[0] })
    }
   // console.log(input)

    let formData = new FormData()
    const Submit = (e) => {
        e.preventDefault()
        console.log(input)
        formData.append('name', input.name)
        formData.append('type', input.type)
        formData.append('price', input.price)
        formData.append('Myimage', input.image)
        axios.post('http://localhost:4000/upload', formData)
        .then((res)=>{
            console.log(res)
            if(res.data.success){
                alert('Added Grocery succussfully')
            }
        })
        .catch((err)=>{
            console.log(err)


        })



    }

    return (
        <>
            <div className="add-grocery-2">

                <form onSubmit={Submit}>

                    <h2>Name: </h2><input name='name' onChange={Handlechange} type="text" />
                    <h2>Type: </h2><input name='type' onChange={Handlechange} type="text" />
                    <h2>Price: </h2><input name='price' onChange={Handlechange} type="number" />
                    <h2>Image: </h2><input name='Myimage' onChange={imageHandle} type="file" />

                    <button type='submit'>Add Grocery</button>
                </form>
            </div>


        </>
    )
}
