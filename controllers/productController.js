const productModel = require('../models/productModel');

const getProductController = async (req, res) => {
    try {
        const products = await productModel.getProductModel();

        const productsWithBase64 = products.map(p => {
            if (p.image && p.image.data) {
                const base64Image = Buffer.from(p.image.data).toString('base64');
                p.imageBase64 = `data:image/jpeg;base64,${base64Image}`;
            }
            return p;
        });

        res.status(200).json(productsWithBase64);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Load product failed' });
    }
}

const editProductController = async (req, res) => {
    const { quantity, productID } = req.body;
    try {
        await productModel.editProductModel(quantity, productID);
        res.status(200).send({ message: 'Update success' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
}

const checkProductController = async(req, res)=>{
    const {id} =req.body;
    try {
        const result = await productModel.checkProductModel(id);
        res.status(200).json(result[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Server error'});
    }
}

module.exports = { getProductController, editProductController, checkProductController };