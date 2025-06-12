const con = require('../config/db');

const loginModel = (email, password) => {
    return new Promise((resolves, reject) => {
        con.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password],
            (err, result) => {
                if (err) reject(err);
                resolves(result);
            });
    });
};

module.exports = {loginModel};