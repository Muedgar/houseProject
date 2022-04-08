const house = require("./houseModel");
const mongoose = require("mongoose");
class crudHouseModel {
    async createHouses(contact1,contact2,contact3,costpermonth,description,image1,image2,image3,image4,image5,image6,image7,image8,image9,location,ownercontact,rentalfacts,size) {
        try {
            let houses = "";
            mongoose.connect(process.env.MONGO_URI).then(async ()=>{
                await house.create({contact1,contact2,contact3,costpermonth,description,image1,image2,image3,image4,image5,image6,image7,image8,image9,location,ownercontact,rentalfacts,size}).then(d=> {
                    houses = d;
                }).catch(e=>console.log(e));
            }).catch(e=>console.log(e));
        if(houses) {
            return true;
        }else {
            return false;
        }
        } catch (error) {
            throw new Error(error);
        }
    }
    async updateHouses(id,contact1,contact2,contact3,costpermonth,description,image1,image2,image3,image4,image5,image6,image7,image8,image9,location,ownercontact,rentalfacts,size) {
        
        let data;
        mongoose.connect(process.env.MONGO_URI).then(async ()=>{
        await house.findOneAndUpdate({ _id: id }, {contact1,contact2,contact3,costpermonth,description,image1,image2,image3,image4,image5,image6,image7,image8,image9,location,ownercontact,rentalfacts,size}).then(d=> {
            data = d;
        }).catch(e=>console.log(e));
    });
        return data;
    }
    async deleteHouses(id) {
        let data;
        mongoose.connect(process.env.MONGO_URI).then(async ()=>{
            console.log({delete: id});
        await house.findOneAndDelete({ _id: id }).then(d=> {
            data = d;
        }).catch(e=>console.log(e));
    });
        return data;
    }
}

module.exports = crudHouseModel;