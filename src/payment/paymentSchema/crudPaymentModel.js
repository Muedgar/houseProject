const payment = require("./paymentModel");
const mongoose = require("mongoose");

class crudPaymentModel {
    async createPayment(merchant,tenant,house,date,amount,status) {
        mongoose.connect(process.env.MONGO_URI).then(async d=>{
            await payment.create({merchant,tenant,house,date,amount,status}).then(d=>{
                return d;
            }).catch(err=>console.log(err));
        }).catch(e=>console.log(e));
    }
    async updatePayment(id,merchant,tenant,house,date,amount,status) {
        mongoose.connect(process.env.MONGO_URI).then(async d=>{
            await payment.findOneAndUpdate({_id: id},{merchant,tenant,house,date,amount,status}).then(d=>{
                return d;
            }).catch(err=>console.log(err));
        }).catch(e=>console.log(e));
    }
    async deletePayment(id) {
        mongoose.connect(process.env.MONGO_URI).then(async d=>{
            await payment.findOneAndDelete({_id: id}).then(d=>{
                return d;
            }).catch(err=>console.log(err));
        }).catch(e=>console.log(e));
    }
}

module.exports = crudPaymentModel;