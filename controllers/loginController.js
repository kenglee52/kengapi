const loginModel = require('../models/loginModel');

const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await loginModel.loginModel(email, password);
        if (result.length > 0) {
            const { password, ...userWithoutPassword } = result[0];                  
            res.status(200).json({
                message: 'Login success',
                user: userWithoutPassword
            });
        } else {
            res.status(401).send({ message: 'email or password is not correct' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Login failed!' });
    }
};

module.exports = { loginController };
