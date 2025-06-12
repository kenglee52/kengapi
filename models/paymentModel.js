const con = require('../config/db');

const savePaymentModel = (orderID, amout) => {
    return new Promise((resolves, reject) => {
        con.query('INSERT INTO payment VALUES(?, ?)', [orderID, amout], (err, result) => {
            if (err) reject(err);
            resolves(result);
        })
    })
}

module.exports = { savePaymentModel };