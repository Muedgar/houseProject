// import houses repository
const housesRepository = require("./houseSchema/crudHouseModel");
const house = require("./houseSchema/houseModel");
//
const mongoose = require("mongoose");

const createHouseController = async (req, res) => {
    const uri = process.env.MONGO_URI
    mongoose
      .connect(uri)
      .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
        createHouse();
      })
      .catch(err => {
        console.error("Error connecting to mongo", err);
      });
        const createHouse = async() => {
            const {houses} = req.body;
            let count = 0;
            let id;
            for(let i=0;i<houses.length;i++) {
                const {contact1,contact2,contact3,costpermonth,description,image1,image2,image3,image4,image5,image6,image7,image8,image9,location,ownercontact,rentalfacts,size} = houses[i];
                try {
                    await new housesRepository().createHouses(contact1,contact2,contact3,costpermonth,description,image1,image2,image3,image4,image5,image6,image7,image8,image9,location,ownercontact,rentalfacts,size);
                } catch (error) {
                    console.log(error);
                    res.status(401).json({status: "failed to record data (:"});
                }
                // 
                
                console.log("recording one");
                count++;
            }
            
            id = setInterval(() => {
                if(count == houses.length) {
                    clearInterval(id);
                    console.log("just cleared interval");
                    res.status(200).json({status: "recorded successfully!!!"});
                }
            }, 1000);
    
        }
    
}

const readHouseController = async (req, res) => {
    try {
        mongoose.connect(process.env.MONGO_URI).then(async ()=>{
            return await house.find({}).then(data=>{
                res.status(200).json(data);
            }).catch(e=>console.log(e));
        }).catch(e=>console.log(e));
    } catch (error) {
        throw new Error(error);
    }
}

const updateHouseController = async (req,res)=> {
    try {
        const {id,contact1,contact2,contact3,costpermonth,description,image1,image2,image3,image4,image5,image6,image7,image8,image9,location,ownercontact,rentalfacts,size} = req.body;
        await new housesRepository().updateHouses(id,contact1,contact2,contact3,costpermonth,description,image1,image2,image3,image4,image5,image6,image7,image8,image9,location,ownercontact,rentalfacts,size).then(d=>{
                res.status(200).json({status: "data updated"});
        }).catch(e=>console.log(e));
    } catch (error) {
        throw new Error(error);
    }
}

const deleteHouseController = async(req,res) => {
    try {
        const {id} = req.body;
        await new housesRepository().deleteHouses(id).then(d=>{
                res.status(200).json({data: d, status: "data deleted"});
        }).catch(e=>console.log(e));
    } catch (error) {
        throw new Error(error);
    }
}
module.exports = {createHouseController,readHouseController,updateHouseController,deleteHouseController};






