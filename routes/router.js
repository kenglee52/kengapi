const express = require('express');

const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const productController = require('../controllers/productController');
const accountController = require('../controllers/accountController');
const orderController = require('../controllers/orderController');
const paymentController = require('../controllers/paymentController');

const router = express.Router();

router.post('/register', registerController.createUserController);
router.post('/login', loginController.loginController);
router.get('/products',productController.getProductController);
router.put('/addmoney',accountController.AddMoneyController);
router.put('/takeoutmoney', accountController.TakeOutMoneyController);
router.post('/order',orderController.saveOrderController);
router.post('/detail', orderController.saveDetailController);
router.post('/payment',paymentController.savePaymentController);
router.get('/money/:id',accountController.showMoneyController);
router.put('/editproduct', productController.editProductController);
router.post('/checkproduct',productController.checkProductController);
router.get('/order/:userID',orderController.showOrderController);
router.post('/orderdetail',orderController.showDetailController);

module.exports = router;