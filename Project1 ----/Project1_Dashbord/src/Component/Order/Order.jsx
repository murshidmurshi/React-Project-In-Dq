import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default function Order() {
    const [display, setDisplay] = useState([])
    useEffect(() => {
        async function UseEffect() {
            let token = await JSON.parse(localStorage.getItem('token'))
            console.log(token, 'Tokennnnnnnnnn')
            Axios.get('http://localhost:4000/api/admin/view-order', { headers: { 'auth-token': token } })
                .then((res) => {
                    console.log(res, 'Orderrrrrrrrr..........')
                    if (res.data.success) { 
                        //setDisplay(res.data.order)
                        let uniqData = (res.data.order).filter((item, index, array) => {
                            return index === (res.data.order).findIndex(obj =>
                                obj.order_no === item.order_no);

                        });

                        setDisplay(uniqData)


                    }
                })
                .catch((err) => {
                    console.log(err)

                })
        }
        UseEffect()

    }, [])

    return (
        <>
            <div className="dashboard">
                <Sidebar />
                <div className="main-dashboard">
                    <p>Dashboard</p>
                    <hr />
                    <p>Order/table</p>

                    <p>Lorloremwfdnjsribus inventore sapiente ab. Voluptate sint cum eos placeat magni excepturi.</p>

                    <div className="table">
                        <table border={1}>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Dev.Name</th>
                                <th>Delv.Address</th>
                                <th>Delv.Phone</th>

                                <th>View</th>
                            </tr>
                            {
                            display==0||null?<>No Data</>:  
                                display?.map((item, index) => {
                                    if(item.status=='completed'){
                                        return (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <th>{item.user_id.username}</th>
                                        <th>{item.user_id._id}</th>
                                        <th>
                                            <p>{index + 1}.{item.cart[0].grocery_id}</p>
                                        </th>
                                        <th>{item.price}</th>
                                        <th>{item.quantity}</th>


                                        <Link to={`/singleorder/${item.order_no}`}>View</Link>
                                    </tr>
                                )
                                    }
                                    else{
                                        <>No Data</>
                                    }
                                
                            })}

                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
