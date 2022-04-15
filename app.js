/// require packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// modules
const router = require("./router/router");
const housesRepository = require("./src/house/houseSchema/crudHouseModel");
// configure packages
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
// run dotenv config
require("dotenv").config();

/// dotenv
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const start = async (PORT, MONGO_URI) => {
    try {
        await mongoose.createConnection(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true},(err) => {
            if(err) console.log(err) 
            else console.log("mongdb is connected");
           });
        app.listen(PORT,()=> {
            console.log("Server is listening on port "+PORT);
        });
    }catch(err) {
        console.error(err);
    }
}

// serve static files.

app.use(express.static(__dirname+'/public'));

// basic routes
app.get('/',(req,res)=> {
    res.sendFile(__dirname+'/public/index.html');
});
app.get('/authentication',(req,res)=> {
    res.sendFile(__dirname+'/public/authentication.html');
});
app.get('/merchant', (req, res) => {
    res.sendFile(__dirname+'/public/merchant.html');
});
app.get('/merchantView', (req, res) => {
    res.sendFile(__dirname+'/public/update.html');
});

app.get('/tenantView', (req,res)=> {
    res.sendFile(__dirname+'/public/client.html');
});

// route to merchant create house route
app.use('/apis',router);
start(PORT, MONGO_URI);