const payment = require("./paymentModel");
const mongoose = require("mongoose");
const houseModel = require("../../house/houseSchema/houseModel");
class crudPaymentModel {
    // // 
    // constructor() {
    //     this.processedPaymentData = [];
    // }
    // handleProcessingPaymentData = new crudPaymentModel();
    async createStep1(paymentCollection,id, createData) {
        //i.find if the house id exists in the payment collection: since result is false then keep going.
        function i(col,id) {
            for(let i=0;i<col.length;i++) {
                if(col[i].house == id) {
                    return true;
                }
            }
            return false;
        }
        function ii(col,id) {
            let iiArray = [];
            for(let i=0;i<col.length;i++) {
                if(col[i].house == id) {
                    iiArray.push(col[i]);
                }
            }
            return iiArray;
        }
        function ioiioii(col) {
            for(let i=0;i<col.length-1;i++) {
                let date1 = col[i][Object.keys(col[i]['_doc'])[4]];
                let date2 = col[i+1][Object.keys(col[i]['_doc'])[4]];
                if(date1>date2) {
                    let temp = col[i+1];
                    col[i+1] = col[i];
                    col[i] = temp;
                }
            }
            return col;
        }
        function ioiioiii(col,dat) {
            //col[col.length-1][Object.keys(col[col.length-1]['_doc'])[4]]
            let currentYear = new Date(dat).getFullYear();
            let newCol = [];
            for(let i=0;i<col.length;i++) {
                let date1 = col[i][Object.keys(col[i]['_doc'])[4]].getFullYear();
                if(currentYear == date1) {
                    newCol.push(col[i]);
                }
            }
            return newCol;
        }
        function ioiioiv(col) {
            let newCol = [];
            // implement last step of first create1.
            for(let i=0;i<col.length;i++) {
                let sameMonth = [];
                sameMonth.push(col[i]);
                for(let j=i+1;j<col.length;j++) {
                     let iMonth = col[i][Object.keys(col[i]['_doc'])[4]].getMonth();
                     let jMonth = col[j][Object.keys(col[j]['_doc'])[4]].getMonth();
                   
                     if(iMonth == jMonth) {
                        sameMonth.push(col[j]);
                        let temp = col[j];
                        col[j] = col[col.length-1];
                        col[col.length-1] = temp;
                        col.pop();
                     }
                }
                newCol.push(sameMonth);
            }
            return newCol;
        }
        // finish i
        let iRes = i(paymentCollection,id);
        console.log(iRes);
        if(iRes==true) {
            // call ii.
            //i.ii.i.keep all the house payment documents that exist in the payment collection based on id.
            let iiRes=  ii(paymentCollection,id);
            //i.ii.ii.sort the documents based on date, ascending order:
            let ioiioiiRes = ioiioii(iiRes);
            //i.ii.iii.delete all documents except the ones that exist in the latest year which is last element's year:
            const dat = createData.date;
            let ioiioiiiRes = ioiioiii(ioiioiiRes,dat);
            //i.ii.iv.create a two dimensional array where each element contains documents that have same months
            let ioiioivRes = ioiioiv(ioiioiiiRes);
            return ioiioivRes;
        }
        if(iRes==false){
            console.log("running false...")
            let {merchant,tenant,house,date,amount,status} = createData;
            // before deciding to create for the first time
            // amount criteria. the first payment must be in full amount
            // get house standard monthly payment and compare to amount
            mongoose.connect(process.env.MONGO_URI).then(async d=>{
                console.log("trying to find house", house);
                async function checkAndCreate(d) {
                    if(Number(amount)>=Number(d.costpermonth)) {
                        console.log("amount is fine");
                        status = true;
                        await payment.create({merchant,tenant,house,date,amount,status}).then(d=>{
                            console.log(d);
                            console.log("created payment");
                            return "stored";
                        }).catch(err=>console.log(err));
                    }else {
                        return "amount not enough";
                    }
                }
                await houseModel.findById({_id: house}).then(async d=> {
                    
                    console.log("house found...");
                    checkAndCreate(d);
                }).catch(e=>console.log(e));
            }).catch(e=>new Error(e));
            // status if the amount is fine, then change the status to true before creating payment
        }
    }
    async createStep2(step1,createData) {
        //i.i.log the input of this stage, and prepare the input to test this stage.
        // console.log(step1);
        // console.log(createData);
        // creating test input for this stage.
        //i.ii.select the house and store the house rent payment amount for use
        async function ioii(house) {
            mongoose.connect(process.env.MONGO_URI).then(async d=>{
            
            await houseModel.findById({_id: house}).then(d=> {
                ioiii(d.costpermonth).then(data=> {
                    new crudPaymentModel().createStep3(data);
                });
            }).catch(e=>console.log(e));
        }).catch(e=>new Error(e));
        }
        let {house} = createData;
        ioii(house);

        //i.iii.for each month, calculate the sum of payments made if sum < rent then do the following:
        async function ioiii(rent) {
            
            // before increasing the months sum, first decide if the months sum is less that rent.
            // if the month's sum < rent the use req sum as in req
            let months = JSON.parse(JSON.stringify(step1));
            console.log("this is months I am dealing with, ",months);
            let req = JSON.parse(JSON.stringify(createData));
            console.log("this is request data I am dealing with, ",req);
            for(let i=0;i<months.length;i++) {
                let monthSum = 0;
                for(let j=0;j<months[i].length;j++) {
                    monthSum += Number(months[i][j].amount);
                }
                // decide 
                console.log(monthSum, rent, typeof monthSum, typeof rent);
                if(monthSum >= rent) {
                    // continue
                    if(i==months.length-1) {
                        console.log("end of the loop");
                        return {months, req};
                    }else {
                        console.log("month is fine");
                    continue;
                    }
                    
                }
                //
                //i.iii.i.add the months sum to req sum, if new sum > rent, update req sum and move to next month
                let diff = rent - monthSum;

                if(diff >= Number(req.amount) && req.amount!='0') { // add all the req amount to this month, set Number(req.amount) to 0, and return.
                    let reqClone = Object.assign({},req);
                    reqClone.date = months[i][0].date;
                    months[i].push(reqClone);
                    req.amount= '0';
                    return {months, req};
                }else if(diff < Number(req.amount) && req.amount!='0') { // add diff amount to this month, set req.amountto req.amount- diff
                    
                    let diffReq = Object.assign({}, req);
                    diffReq.amount = diff;
                    diffReq.date = months[i][0].date;
                    months[i].push(diffReq);
                    req.amount= (Number(req.amount) - diff).toString();
                }
                if(i==months.length-1) {
                    console.log("end of the loop");
                    return {months, req};
                }
            }
        }
            //i.iii.i if new sum < rent, move to ii.
            //i.iii.ii. if new sum == rent, move to ii. 
        //ii.return an array of objects and the req object with the amount updated.
        //ii.i.the input is the updated months array, and the updated value of req amount
        //ii.ii.prepare the output of this stage, which is the the new months array and req amount
        //ii.ii.i.if the req amount is unchanged then there are no debts
        //ii.iii.ii.if the req amount is changed then debts were present
    }
    async createStep3(step2) {
        console.log("from step 3");
        console.log(step2.months);
        console.log(step2.req);
        let months = step2.months;
        let req = step2.req;
        //3.
        // purpose of this stage: finish dealing with date criteria, deal with comments extensively.
        // i.perform create of new objects in the same month in argument
        for(let i=0;i<months.length;i++) {
            for(let j=0;j<months[i].length;j++) {
                // update
                let month = months[i][j];
                if(Object.keys(month).length==6) { // create
                    month["status"] = true;
                    const {merchant,tenant,house,date,amount,status} = month;
                    mongoose.connect(process.env.MONGO_URI).then(async d=>{
                        await payment.create({merchant,tenant,house,date,amount,status}).then(d=>{
                            console.log(d);
                            console.log("added payment");
                        }).catch(err=>console.log(err));
                    }).catch(e=>new Error(e));
                }
            }
        }
        // ii.perform only create for the second argument if amount > 0, and put it in the next month.
        if(Number(req.amount)>0) {
            req["status"] = true;
            const {merchant,tenant,house,date,amount,status} = req;
            mongoose.connect(process.env.MONGO_URI).then(async d=>{
                await payment.create({merchant,tenant,house,date,amount,status}).then(d=>{
                    console.log(d);
                    console.log("added the rest of payment");
                }).catch(err=>console.log(err));
            }).catch(e=>new Error(e));
        }
    }
    async createPayment(merchant,tenant,house,date,amount,status) {
        mongoose.connect(process.env.MONGO_URI).then(async d=>{

            // after connectinig to the db before deciding to creating
            /// get houses collection and call createStep1 method
            await payment.find({}).then(async d=> {
                const createData = {merchant,tenant,house,date,amount,status};
                // call step1 and it will call other steps.
                let createStep1Res = this.createStep1(d,house, createData);
                createStep1Res.then(d=> {
                    console.log("return value of step1",d);
                    if(d!="stored" && d!=undefined) {
                        console.log("not stored");
                      this.createStep2(d, createData);
                    }else if(d==undefined) {
                        console.log("returning payment not created...");
                        return "payment not created";
                    }
                });
               
            }).catch(e=>console.log(e));
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