const OrderSchema = require('../Model/Order')


const ViewOrder = async (req, res) => {
    try {
        let id = req.params.id;
        if (id) {
            let order = await OrderSchema.find({ order_no: id })
                .populate(['shipping_id', "grocery_id", 'user_id'])

            if (order) {
                return res.json({ success: true, order })
            }
            else {
                res.json({ success: false, message: "Order Not Found!!" })
            }
        }
        else {
            let order = await OrderSchema.find()
                .populate(['shipping_id', 'user_id', 'grocery_id'])
            res.json({ success: true, order })
        }
    }
    catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)

    }
}

const UpdateOrder = async (req, res) => {
    try {
        let id = req.params.id;
        let order = await OrderSchema.find({ order_no: id })

        if (order[0].status == 'pending') {
            order.map(async (item) => {
                let id = item._id;
                let up_order = await OrderSchema.findByIdAndUpdate(id, { $set: { status: 'confirmed' } }, { new: true })
                console.log(up_order, '1111111111up___order')
            })

            return res.json({ success: true, message: "done" })
        }
        else if (order[0].status == 'confirmed') {
            order.map(async (item) => {
                let id = item._id;
                let up_order = await OrderSchema.findByIdAndUpdate(id, { $set: { status: 'packed' } }, { new: true })
                console.log(up_order, "UpdatedtoPacked........ ")
            })
            return res.json({ success: true, message: "done" })

        }
        else if (order[0].status == 'packed') {
            order.map(async (item) => {
                let id = item._id;
                let up_order = await OrderSchema.findByIdAndUpdate(id, { $set: { status: 'outofdelivery' } }, { new: true })
                console.log(up_order, "UpdatedtoOuteOF DELIVEFd........ ")
            })
            return res.json({ success: true, message: "done" })


        }
        else if (order[0].status == 'outofdelivery') {
            order.map(async (item) => {
                let id = item._id;
                let up_order = await OrderSchema.findByIdAndUpdate(id, { $set: { status: 'completed' } }, { new: true })
                console.log(up_order, "UpdatedtoCompleted........ ")
            })
            return res.json({ success: true, message: "done" })

        }

        else {
            res.json({ success: false, message: 'Already Done' })
        }

    }
    catch (err) {
        res.json({ success: false, message: 'Internal Server Error' })
        console.log(err)
    }


}

module.exports = { ViewOrder, UpdateOrder }