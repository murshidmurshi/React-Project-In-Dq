const express=require('express')
const route=express.Router()
const Admin_Auth=require('../Middalwar/admin_auth')
const {ViewOrder,UpdateOrder} = require('../Controller/Order_controller')
const {Register,Login}=require('../Controller/Admin_Controller')

route.post('/register',Register)
route.post('/login',Login)


route.get('/view-order',Admin_Auth,ViewOrder)
route.get('/view-order/:id',Admin_Auth,ViewOrder)

route.put('/update-order/:id',UpdateOrder)

module.exports=route
    
