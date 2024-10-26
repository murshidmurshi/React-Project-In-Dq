const express = require('express')
const multer = require('multer')
const ImageSchema = require('./Model/ImagesSchema')
const GrocerySchema=require('./Model/Grocery')

const app = express()
const cors = require('cors')
const hostaname = '127.0.0.1';
const port = 4000;
const ConnectMongo = require('./db')
const { defaults } = require('lodash')
ConnectMongo()

/* app.get('/',(req,res)=>{
    console.log('/')
    res.send('This is / Page')

}) */
app.use(cors())
app.use(express.json())
app.use('/Upload', express.static('./Upload'))


const Storage = (multer.diskStorage({
    destination: 'Upload',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
        //console.log(file.originalname)
    }
}))
const Upload = multer({
    storage: Storage
}).single('Myimage')

app.post('/upload', (req, res) => {
    //for image schema
   /*  Upload(req, res, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            const newImage = new ImageSchema({
                name: req.body.name,
                type: req.body.type,
                price: req.body.price,
                image: req.file.filename
                //data:req.file.filename,
                //contentType:'image.png'
            })
            // console.log(req.file.filesname)
            // console.log(filename)
            newImage.save()
                .then(() => {
                    // console.log('Succussfully Uploaded')
                    //res.send('Succussfully Uploaded')

                    res.json({ success: true, newImage })
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    }) */

    //for grocery schema
    Upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newGrocery=new GrocerySchema({
                name:req.body.name,
                description:req.body.description,
                image:req.file.filename,
                quantity:req.body.quantity,
                price:req.body.price,

            })
            newGrocery.save()
            .then(()=>{
                console.log('SuccussFully Uploaded')
                res.json({success:true,newGrocery})
            })
            .catch((err)=>{
                console.log(err)
            })

        }

    })

})
app.use('/api/project1', require('./Routes/User_route'))
app.use('/api/admin', require('./Routes/Admin_route'))

app.listen(port, hostaname, () => {
    console.log('Server Started on Port', port)
})