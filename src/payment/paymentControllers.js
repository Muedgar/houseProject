const crudPaymentModel = require("./paymentSchema/crudPaymentModel");
const payment = require("./paymentSchema/paymentModel");
const houseModel = require("../house/houseSchema/houseModel");
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
            /*
                i.select all houses and payment collections from the database
                ii.use the payment collection to filter the houses that get returned 
                    based on houses that doesn't exist in the payment collection.
            */
           function data(data) {
            //    res.status(200).json(data);
            //before returning data, first edit the following
            //
            /*
                1.what is the first thing the client want to see? 
                    Houses that can be rented for the first time from a variety of owners merchants
                    i.select all houses and payment collections from the database
                    ii.use the payment collection to filter the houses that get returned 
                    based on houses that doesn't exist in the payment collection.
                2.what is the second thing the client want to see? 
                    A List of rented houses, for a specific user
                    i.input a current user
                    ii.return houses that current user rented using filtering.
            */
           let houses = data.houses;
           let payments = data.payments;
           // First major task modify data's house key
           // Second major task further modify house key
           // based on houses that doesn't exist in the payment collection.
           let housesThatCanBeRented = [];
           let housesThatAreRented = [];
           for(let i=0;i<houses.length;i++) {
             let id = houses[i]._id;
             let idFound = false;
             // find id in payments
             for(let j=0;j<payments.length;j++) {
                if(id == payments[j].house) {
                    idFound = true;
                }
             }
             //
             if(idFound == false) {
                housesThatCanBeRented.push(houses[i]);
             }else if(idFound == true) {
                housesThatAreRented.push(houses[i]);
             }
           }

           /*
           2.what is the second thing the client want to see? 
                A List of rented houses, for a specific user
                i.input a current user
                ii.return houses that current user rented using filtering.
           */
           const {currentuser} = req.body;
           let listRentedHousesSpecificUser = [];
           for(let i=0;i<payments.length;i++) {
            if(currentuser == payments[i].tenant) {
                let houseId = payments[i].house;
                // find house and store it
                for(let j=0;j<housesThatAreRented.length;j++) {
                    if(houseId == housesThatAreRented[j]._id) {
                        listRentedHousesSpecificUser.push(housesThatAreRented[j]);
                    }
                }
            }
           }
           res.status(200).json({housesThatCanBeRented, listRentedHousesSpecificUser});
           }
           async function getData() {
            mongoose.connect(process.env.MONGO_URI).then(async d=>{
                
               await houseModel.find({}).then(async d=> {
                    let houses = d;
                    await payment.find({}).then(d=> {
                        let payments = d;
                        data({houses,payments});
                    }).catch(e=>console.log(e));
                }).catch(e=>console.log(e));
                
            }).catch(e=>new Error(e));
           };
          getData();
    } catch (error) {
        throw new Error(error);
    }
}

const  merchantReadsPaymentController = async(req, res) => {
    try {
       
       function data(data) {
       let houses = data.houses;
       let payments = data.payments;
       let housesThatCanBeRented = [];
       let housesThatAreRented = [];
       for(let i=0;i<houses.length;i++) {
         let id = houses[i]._id;
         let idFound = false;
         // find id in payments
         for(let j=0;j<payments.length;j++) {
            if(id == payments[j].house) {
                idFound = true;
            }
         }
         //
         if(idFound == false) {
            housesThatCanBeRented.push(houses[i]);
         }else if(idFound == true) {
            housesThatAreRented.push(houses[i]);
         }
       }
       const {currentuser} = req.body;
       let listRentedHousesSpecificUserMerchant = [];
       let paymentsMadeInvolvingThisMerchant = [];
       for(let i=0;i<payments.length;i++) {
        if(currentuser == payments[i].merchant) {
            paymentsMadeInvolvingThisMerchant.push(payments[i]);
            let houseId = payments[i].house;
            // find house and store it
            for(let j=0;j<housesThatAreRented.length;j++) {
                if(houseId == housesThatAreRented[j]._id) {
                    listRentedHousesSpecificUserMerchant.push(housesThatAreRented[j]);
                }
            }
        }
       }
       res.status(200).json({listRentedHousesSpecificUserMerchant,paymentsMadeInvolvingThisMerchant});
       }
       async function getData() {
        mongoose.connect(process.env.MONGO_URI).then(async d=>{
            
           await houseModel.find({}).then(async d=> {
                let houses = d;
                await payment.find({}).then(d=> {
                    let payments = d;
                    data({houses,payments});
                }).catch(e=>console.log(e));
            }).catch(e=>console.log(e));
            
        }).catch(e=>new Error(e));
       };
      getData();
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

module.exports = {createPaymentController,readPaymentController,merchantReadsPaymentController,updatePaymentController,deletePaymentController};