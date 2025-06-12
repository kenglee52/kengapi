const orderModel = require('../models/orderModel');

const saveOrderController = async (req, res) => {
    const { orderID, date, userID } = req.body;
    try {
        await orderModel.saveOrderModel(orderID, date, userID);
        res.status(200).send({ message: 'Success' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
}

const saveDetailController = async (req, res) => {
    const { orderID, productID, saleQty, total } = req.body;
    try {
        await orderModel.saveDetailModel(orderID, productID, saleQty, total);
        res.status(200).send({ message: 'Success' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
}

const showOrderController = async (req, res) => {
    const { userID } = req.params;
    try {
        const results = await orderModel.showOrderModel(userID);
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
}

const showDetailController = async(req,res)=>{
    const {id} = req.body;
    try {
        const detail = await orderModel.showDetailModel(id);
        res.status(200).json(detail);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
}

module.exports = { saveOrderController, saveDetailController, showOrderController, showDetailController };