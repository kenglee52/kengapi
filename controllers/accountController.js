const accountModel = require('../models/accountModel');

const AddMoneyController = async (req, res) => {
    const { money, id } = req.body;
    try {
        const updatedAccount = await accountModel.AddMoneyModel(money, id);
        res.status(200).send({
            message: 'Add money successfully',
            money: updatedAccount.money 
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Add money failed' });
    }
}

const TakeOutMoneyController = async (req, res) => {
    const { money, id } = req.body;
    if (money <= 0) {
        return res.status(400).json({ message: 'Amount to withdraw must be greater than 0' });
    }

    try {
        const updatedAccount = await accountModel.TakeOutMoneyModel(money, id);
        res.status(200).json({
            message: 'Take out money successfully',
            money: updatedAccount.money
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message || 'Take out money failed' });
    }
};



const showMoneyController = async (req, res) => {
    const { id } = req.params;
    try {
        const money = await accountModel.showMoneyModel(id);
        res.status(200).json(money[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
};

module.exports = { AddMoneyController, TakeOutMoneyController, showMoneyController };
