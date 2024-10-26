import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Axios from 'axios'
import { Link } from 'react-router-dom'
export default function Order() {
    const [display, setDisplay] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        async function UseEffect() {
            let token = await JSON.parse(localStorage.getItem('token'))
            console.log(token, 'Tokennnnnnnnnn')
            Axios.get('http://localhost:4000/api/admin/view-order', { headers: { 'auth-token': token } })
                .then((res) => {
                    console.log(res, 'OORDEr')
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

    }, [load])
    console.log(display)
    const handleProceed = async (order_no) => {
        let token = JSON.parse(localStorage.getItem('token'));
        Axios.put(`http://localhost:4000/api/admin/update-order/${order_no}`,
            { headers: { 'auth-token': token } }
        )
            .then((res) => {
                if (res.data.success) {
                    console.log(res, 'UPDateORder.........../')
                    alert('Updated Successfully')
                    setLoad(false)
                }
                else {
                    console.log(res)

                }
            })
            .catch((err) => {
                console.log(err)
            })

    }




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
                                <th>Update</th>
                            </tr>
                            {
                                display == 0 || null ? <>No Data</> :
                                    display?.map((item, index) => {
                                        if (item.status != 'completed') {
                                            return (
                                                <tr>
                                                    <th>{index + 1}</th>
                                                    <th>{item.user_id.username}</th>
                                                    <th>{item.user_id._id}</th>
                                                    
                                                    <th>{item.price}</th>
                                                    <th>{item.quantity}</th>
                                                    <th>{item.quantity}</th>

                                                    <th><Link to={`/singleorder/${item.order_no}`}>View</Link></th>
                                                
                                                    {
                                                    item?.status=='pending'?
                                                    <th>
                                                        <Link to={handleProceed(item.order_no)}>Confirm</Link>
                                                    </th>:
                                                    item?.status=='confirm'?
                                                    <th>
                                                        <Link to={handleProceed(item.order_no)}>Packed</Link>
                                                    </th>:
                                                    item?.status=='packed'?
                                                    <th>
                                                        <Link to={handleProceed(item.order_no)}>Packed</Link>
                                                    </th>:
                                                    item?.status=='packed'?
                                                    <th>
                                                        <Link to={handleProceed(item.order_no)}>OutOfDelivey</Link>
                                                    </th>:
                                                    <th>
                                                        <Link to={handleProceed(item.order_no)}>Completed</Link>
                                                    </th>



                                                    }
                                                        
                                                </tr>




                                            )
                                        }
                                    })}

                        </table>
                    </div>
                </div>
            </div >

        </>
    )
}
