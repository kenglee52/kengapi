const registerModel = require('../models/registerModel');

const createUserController = async(req, res)=>{
    const { name, gender, tel, email, password} = req.body;
    try {
        await registerModel.createUserModel( name, gender, tel, email, password);
        res.status(200).send({message: 'Insert data successfuly'});
    } catch (error) {
        console.error(error);
        res.status(500).send({message: 'Insert data feild'});
    }
}

module.exports = {createUserController}