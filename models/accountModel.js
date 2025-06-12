const con = require('../config/db');

const AddMoneyModel = (money, id) => {
    return new Promise((resolve, reject) => {
        // First, update the money
        con.query('UPDATE user SET money = money + ? WHERE userID = ?', [money, id], (err, result) => {
            if (err) return reject(err);

            // Then, fetch the updated money
            con.query('SELECT money FROM user WHERE userID = ?', [id], (err, rows) => {
                if (err) return reject(err);
                if (rows.length === 0) return reject(new Error("User not found"));
                resolve(rows[0]); // return { money: ... }
            });
        });
    });
};

const TakeOutMoneyModel = (money, id) => {
    return new Promise((resolve, reject) => {
        // ตรวจสอบเงินก่อน
        con.query('SELECT money FROM user WHERE userID = ?', [id], (err, rows) => {
            if (err) return reject(err);
            if (rows.length === 0) return reject(new Error('Account not found'));

            const currentMoney = rows[0].money;
            if (currentMoney <= 0) {
                return reject(new Error('Cannot withdraw from an account with 0 balance'));
            }
            if (money > currentMoney) {
                return reject(new Error('Insufficient funds'));
            }
            con.query('UPDATE user SET money = money - ? WHERE userID = ?', [money, id], (err) => {
                if (err) return reject(err);
                con.query('SELECT money FROM user WHERE userID = ?', [id], (err, rows) => {
                    if (err) return reject(err);
                    if (rows.length === 0) return reject(new Error("User not found after update"));
                    resolve(rows[0]); // return { money: ... }
                });
            });
        });
    });
};


const showMoneyModel = (id) => {
    return new Promise((resolve, reject) => {
        con.query('SELECT money FROM user WHERE userID = ?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = { AddMoneyModel, TakeOutMoneyModel, showMoneyModel };
