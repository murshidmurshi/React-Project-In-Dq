import React from 'react'
import Admin from './Dashboard/AdminMain'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/signup'
import Dashboard from './Dashboard/Dashboard'
import User from './User/User'
import Order from './Order/Order'
import ReqOrder from './Order/RequestOrder'
import SingleOrder from './Order/Single_Order'


import Shipping from './Shipping/Shipping'
import Groceries from './Grocery/Groceries'
import AddGrocery from './Grocery/AddGrocery'
import AddGrocery2 from './Grocery/AddGrocery2'
import Payment from './Payment/Payment'
import Message from './Messages/Message'
export default function Router() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Dashboard/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/admin/dashboard' element={<Dashboard/>}/>
            <Route exact path='/admin/user' element={<User/>}/>
            <Route exact path='/admin/order' element={<Order/>}/>
            <Route exact path='/admin/reqorder' element={<ReqOrder/>}/>
            <Route exact path='/admin/reqorder' element={<ReqOrder/>}/>
            <Route exact path='/admin/singleorder' element={<SingleOrder/>}/>


            <Route exact path='/admin/shipping' element={<Shipping/>}/>
            <Route exact path='/admin/grocery' element={<Groceries/>}/>
            <Route exact path='/admin/add_grocery' element={<AddGrocery/>}/>
            <Route exact path='/admin/add_grocery-2' element={<AddGrocery2/>}/>
            <Route exact path='/admin/payment' element={<Payment/>}/>
            <Route exact path='/admin/message' element={<Message/>}/>
            
        </Routes>
    </BrowserRouter>
    
    </>
  )
}
