const express = require('express')
const UserSchema = require('../Model/User_schema')
const ContactSchema = require('../Model/Contact_schema')
const OrderSchema = require('../Model/Order')
const GrocerySchema = require('../Model/Grocery')
const CartSchema = require('../Model/Cart')
const PaymentSchema = require('../Model/Payment')

const ShippingSchema = require('../Model/Shipping')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ImagesSchema = require('../Model/ImagesSchema')
const JWT_SECRET = 'hello'

/* const dontenv=require('dotenv')
dontenv.config()
 */

const Register = async (req, res) => {
    try {
        const { username, phone, email, password, address } = req.body;
        let register = await UserSchema.findOne({ email })

        if (register) {
            res.json({ success: false, message: 'Email Already Exsists' })
        }
        let salt = await bcrypt.genSalt(10)
        let secPass = await bcrypt.hash(password, salt)
        register = new UserSchema({ username: username, phone: phone, email: email, password: secPass, address: address })
        let savedregister = await register.save()
        res.json({ success: true, savedregister })
    }
    catch (err) {
        console.log(err)
    }


}

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await UserSchema.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: 'Incorrect Entered Email' })

        }
        const ComparePassword = await bcrypt.compare(password, user.password)
        if (!ComparePassword) {
            res.json({ success: false, message: 'Incorrect Entered Password' })

        }
        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = await jwt.sign(data, JWT_SECRET)
        res.json({ success: true, authToken })
    }
    catch (err) {
        console.log(err)
    }

}
const Email = async (req, res) => {
    try {
        const email = req.body;
        //let user=await UserSchema.findOne({email})
        let user = new UserSchema({ email: email })
        let saveuser = await user.save()
        res.json({ success: true, saveuser })
    }
    catch (err) {
        console.log(err)
    }
}
const Contact = async (req, res) => {

    try {
        const { name, email, message } = req.body;
        let contact = await ContactSchema.findOne({ email })
        if (contact) {
            res.json({ success: false, message: 'Email Already Exists' })
        }
        contact = new ContactSchema({ name: name, email: email, message: message })
        let savedcontact = await contact.save()
        res.json({ success: true, savedcontact })

    }
    catch (err) {
        console.log(err)
    }


}
const Contact2 = async (req, res) => {

    try {
        const contact2 = await ContactSchema.find()
        res.json({ success: true, contact2 })


    }
    catch (err) {
        console.log(err)
    }


}

const User = async (req, res) => {
    const user = await UserSchema.find()
    res.json({ success: true, user })
}

const Order = async (req, res) => {
    const order = await OrderSchema.find()
        //.populate('user_id shipping_id')
        .populate('user_id cart')




    res.json({ success: true, order })


}

/* const Shipping = async (req, res) => {
    const shipping = await ShippingSchema.find()
    // .populate('user_id grocery_id')

    res.json({ success: true, shipping })

} */
const Grocerires = async (req, res) => {
    try {
        const grocery = await GrocerySchema.find()
        res.json({ success: true, grocery })
    }
    catch (err) {
        console.log(err)

    }
}

const AddGrocery = async (req, res) => {

    try {
        const { name, price, description, image, quantity } = req.body;
        // let grocery=await GrocerySchema.findOne({name})
        // res.json({success:false,message:'Name Already Exists'})

        let grocery = new GrocerySchema({ name: name, price: price, description: description, image: image, quantity: quantity })

        const d = await grocery.save()
        res.json({ success: true, d })

    }
    catch (err) {
        console.log(err)
    }

}

const Grocery = async (req, res) => {
    try {
        const grocery = await GrocerySchema.find()
        res.json({ success: true, grocery })
    }
    catch (err) {
        console.log(err)
    }
}

const Cart = async (req, res) => {
    // const id = req.user.id;
    // // console.log(id,'Cart')
    // const cart = await CartSchema.find({ user_id: id })
    //     .populate('grocery_id')
    // if (cart) {
    //     res.json({ success: true, cart })
    // }
    // else {
    //     res.json({ success: false, message: "No Cart..." })
    // }


}

const Payment = async (req, res) => {
    const payment = await PaymentSchema.find()
        .populate('user_id')
    res.json({ success: true, payment })

}

const FindImage = async (req, res) => {
    const img = await ImagesSchema.find()

    res.json({ success: true, img })

}

const InsertCart = async (req, res) => {
    try {
        const { grocery_id, quantity, price } = req.body;
        const user_id = req.user.id;


        // console.log(user_id,'InserCArt')
        const isGroceryPresent = await CartSchema.findOne({ grocery_id, user_id });
        if (isGroceryPresent) {
            isGroceryPresent.quantity += quantity;
            await isGroceryPresent.save();
            return res.json({ success: true, message: `Added ${quantity}` });
        }

        const cart = new CartSchema({ user_id, grocery_id, quantity, price });

        const savedCart = await cart.save();
        res.json({ success: true, savedCart });
    }
    catch (err) {
        res.json({ success: false, message: 'unsuccessful' });
        console.log(err.message);
    }
};




const ViewCart = async (req, res) => {
    try {
        let id = req.user.id;
        let cart = await CartSchema.find({ user_id: id })
            .populate('grocery_id')
        if (cart) {
            return res.json({ success: true, cart })
        }
        else {
            return res.json({ success: false, message: 'No Cart!...' })
        }
    }
    catch (err) {
        res.json({ success: false, message: 'Internal Server Error' })
        console.log(err)
    }
}

const Shipping = async (req, res) => {
    try {
        let user_id = req.user.id;
        const { name, phone, address, pin_code, payment_type,total } = req.body;
        let cart = await CartSchema.find({ user_id })

        let shipping;
        let savedShipping;
        let consent = "SHIP-";
        let uniq_id = 1001;
        let combine = consent + uniq_id


        let data = await ShippingSchema.find()
        let length = data.length

        if (length > 0) {
            let index = length - 1
            console.log(length + ' length')
            let ship_no = data[index].shipping_no;
            console.log(ship_no)
            let array = ship_no.split('-')
            uniq_id = Number(array[1]) + 1
            combine = consent + uniq_id
        }



        let order_constent = 'ORD-';
        let order_uniq_id = 1001;
        let order_combine = order_constent + order_uniq_id;

        let order_data = await OrderSchema.find()
        let order_length = order_data.length;

        if (order_length > 0) {
            let index = order_length - 1
            console.log(order_length + 'length')
            let order_no = order_data[index].order_no
            let array = order_no.split('-')
            let order_uniq_id = Number(array[1]) + 1
            order_combine = order_constent + order_uniq_id

        }

        var savedOrder;

        cart.map(async (item) => {
            let cart_id = item._id
            let price = item.price
            let grocery_id = item.grocery_id
            let quantity = item.quantity;
            shipping = new ShippingSchema({ shipping_no: combine, user_id, cart_id, grocery_id, name, phone, address, pin_code, })
            savedShipping =await shipping.save()

            let shipping_id = savedShipping._id;

            let order = new OrderSchema({ order_no: order_combine, user_id, shipping_id,
                grocery_id, cart_id, price, quantity, status: 'Pending' })

            savedOrder = await order.save()


        })
        console.log(order_combine, 555555)

        let payment = new PaymentSchema({ user_id, order_no: order_combine, status: 'Completed', total, payment_type, })

        let savedPayment = await payment.save()

        let deleteCart = await CartSchema.deleteMany({ user_id })
        // console.log(savedOrder,savedShipping)

        res.json({ success: true, savedOrder, savedShipping, savedPayment })


    }

    catch (err) {
        res.json({ success: false, message: 'Internal Server Error' })
        console.log(err)
    }



}


const ViewOrder=async(req,res)=>{
    try{
        let id=req.user.id;
    if(id){
        let order=await OrderSchema.find({order_no:id})
        .populate(['shipping_id',"grocery_id",'user_id'])

        if(order){
            return res.json({success:true,order})
        }
        else{
            res.json({success:false,message:"Order Not Found!!"})
        }
    }
    else{
        let order=await OrderSchema.find()
        .populate(['shipping_id','user_id','grocery_id'])
        res.json({success:true,order})
    }
    }
    catch(err){
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)

    }
}


module.exports = { Register, Login, Contact2, Contact, User, Order, Shipping, Grocerires, Cart, AddGrocery, Payment, FindImage, Grocery, InsertCart, ViewCart,ViewOrder  }