const AdminSchema = require('../Model/Admin')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET='hello'


const Register = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body;

        let admin = await AdminSchema.findOne({ email })
        if (admin) {
            res.json({ success: false, message: 'Email Already exists' })

        }
        let salt=await bcrypt.genSalt(10)
        let secPass=await bcrypt.hash(password,salt)

        admin = new AdminSchema({ name: name, phone: phone, email: email, password: secPass })
        let savedAdmin = await admin.save()
        res.json({ success: true, savedAdmin })

    }
    catch (err) {
        console.log(err)
    }
}

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let admin = await AdminSchema.findOne({ email })
        if (!admin) {
            return res.json({ success: false, message: 'Incorrect Email' })
        }

        let ComparePassword = await bcrypt.compare(password, admin.password)
        if (!ComparePassword) {
            return res.json({ success: false, message: 'Incorrect password' })
        }

        let data = {
            id: admin.id
        }

        let authToken = await jwt.sign(data,JWT_SECRET)

        res.json({ success: true, authToken })
    }
    catch (err) {
        console.log(err)

    }

}



module.exports = { Register, Login }