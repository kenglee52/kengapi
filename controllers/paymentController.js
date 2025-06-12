const paymentModel = require('../models/paymentModel');

const savePaymentController = async (req, res) => {
    const { orderID, amount } = req.body;
    try {
        await paymentModel.savePaymentModel(orderID, amount);
        res.status(200).send({ message: 'Success' })
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
}

module.exports = { savePaymentController };