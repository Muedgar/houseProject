const crudPaymentModel = require("./paymentSchema/crudPaymentModel");
const payment = require("./paymentSchema/paymentModel");

const mongoose = require("mongoose");


const createPaymentController = async(req,res) => {
    try {
        const {merchant,tenant,house,date,amount,status} = req.body;
        new crudPaymentModel().createPayment(merchant,tenant,house,date,amount,status).then(d=> {
            res.status(200).json({result: "successfully created"});
        }).catch(e=>console.log(e));
    } catch (error) {
        throw new Error(error);
    }
}

const readPaymentController = async(req,res) => {
    try {
        mongoose.connect(process.env.MONGO_URI).then(async ()=>{
            return await payment.find({}).then(data=>{
                res.status(200).json(data);
            }).catch(e=>console.log(e));
        }).catch(e=>console.log(e));
    } catch (error) {
        throw new Error(error);
    }
}

// there must be one controller to input a house id and return all its payments

const updatePaymentController = async(req,res) => {
    try {
        const {id,merchant,tenant,house,date,amount,status} = req.body;
        new crudPaymentModel().updatePayment(id,merchant,tenant,house,date,amount,status).then(d=> {
            res.status(200).json({result: "successfully updated"});
        }).catch(e=>console.log(e));
    } catch (error) {
        throw new Error(error);
    }
}

const deletePaymentController = async(req,res) => {
    try {
        const {id} = req.body;
        new crudPaymentModel().deletePayment(id).then(d=> {
            res.status(200).json({result: "successfully deleted"});
        }).catch(e=>console.log(e));
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {createPaymentController,readPaymentController,updatePaymentController,deletePaymentController};