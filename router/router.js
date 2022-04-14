// require necessary packages
const router = require("express").Router();
// require necessary files
const {createHouseController, readHouseController,updateHouseController,deleteHouseController} = require("../src/house/houseControllers.js");
const {createPaymentController, readPaymentController,merchantReadsPaymentController, updatePaymentController, deletePaymentController} = require("../src/payment/paymentControllers");
// house related routes
router.post('/house/create',createHouseController); // merchant
router.get('/house/read',readHouseController); // merchant and tenant
router.put('/house/update',updateHouseController); // merchant
router.delete('/house/delete',deleteHouseController); // merchant

// payment related routes
router.post('/payment/create', createPaymentController); // tenant
router.get('/payment/read',readPaymentController); // tenant
router.get('/payment/merchantRead',merchantReadsPaymentController);//merchant
router.put('/payment/update',updatePaymentController); // merchant
router.delete('/payment/delete',deletePaymentController);

/*
Merchant while viewing a house
1.update house (the same page)
2.delete house (the same page)
3.view specific house payments already made and collected and already made but not yet collected (another page in another tab)
4.collect payments (the same page)

Tenant while viewing a house
1.view specific house payments alread made and collected and already made but not yet collected (another page in another tab)
2.create a payment for a specific house (the same page)
*/
module.exports = router;