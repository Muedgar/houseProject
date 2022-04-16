// require necessary packages
const router = require("express").Router();
// require necessary files
const {createHouseController, readHouseController,updateHouseController,deleteHouseController} = require("../src/house/houseControllers.js");
const {createPaymentController, readPaymentController,merchantReadsPaymentController, updatePaymentController, deletePaymentController} = require("../src/payment/paymentControllers");
const {signup_post, login_post} = require("../src/auth/authController");
// house related routes
router.post('/house/create',createHouseController); // merchant
router.get('/house/read',readHouseController); // merchant and tenant
router.put('/house/update',updateHouseController); // merchant
router.delete('/house/delete',deleteHouseController); // merchant

// payment related routes
router.post('/payment/create', createPaymentController); // tenant
router.get('/payment/read/:currentuser',readPaymentController); // tenant
router.get('/payment/merchantRead/:currentuser',merchantReadsPaymentController);//merchant
router.put('/payment/update',updatePaymentController); // merchant
router.delete('/payment/delete',deletePaymentController);


// authentication routes
router.post('/signup', signup_post);

router.post('/login', login_post);



module.exports = router;