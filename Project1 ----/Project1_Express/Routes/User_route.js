const express = require('express')
const { Register, Login, Contact, Contact2, User, Order, Shipping, Grocerires, Cart, AddGrocery, Payment, FindImage, Grocery, InsertCart, ViewCart, ViewOrder } = require('../Controller/User_Controller')

const User_auth = require('../Middalwar/User_auth')
const Admin_Auth=require('../Middalwar/admin_auth')

const route = express.Router()

route.post('/register', Register)
route.post('/login', Login)
route.post('/contact', Contact)
route.get('/contact2', Contact2)


route.get('/user', User)
route.get('/order', Order)
route.get('/grocery', Grocerires)
route.post('/addgrocery', AddGrocery)
route.get('/cart', User_auth, Cart)
route.get('/payment', Payment)


route.get('/grocry', Grocery)

route.get('/findimage', FindImage)
route.post('/insertcart', User_auth,InsertCart)
route.get('/viewcart', User_auth, ViewCart)

route.post('/shipping',User_auth, Shipping)
route.get('/view-order',User_auth, ViewOrder)

module.exports = route
