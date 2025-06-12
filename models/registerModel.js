const con = require('../config/db');

const createUserModel = ( name, gender, tel, email, password) => {
    return new Promise((resolves, reject) => {
        con.query('INSERT INTO user(userName, gender, tel, email, password) VALUES(?, ?, ?, ?, ?)',
            [name, gender, tel, email, password], (err, result) => {
                if (err) reject(err);
                resolves(result);
            });
    });
};

module.exports = { createUserModel }