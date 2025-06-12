const con = require('../config/db');

const saveOrderModel = (orderID, date, userID) => {
    return new Promise((resolves, reject) => {
        con.query('INSERT INTO `order` (orderID, date, userID) VALUES (?, ?, ?)', [orderID, date, userID], (err, result) => {
            if (err) reject(err);
            resolves(result);
        });
    });
}

const saveDetailModel = (orderID, productID, saleQty, total) => {
    return new Promise((resolves, reject) => {
        con.query('INSERT INTO detail VALUES(?, ?, ?, ?)', [orderID, productID, saleQty, total], (err, result) => {
            if (err) reject(err);
            resolves(result);
        });
    });
}

const showOrderModel = (userID) => {
    return new Promise((resolves, reject) => {
        con.query('SELECT * FROM `order` WHERE userID = ? ORDER BY date DESC', [userID], (err, result) => {
            if (err) reject(err);
            resolves(result);
        })
    })
}

const showDetailModel = (id) => {
    return new Promise((resolves, reject) => {
        con.query('SELECT d.orderID, p.productName, c.categoryName, d.saleQty, p.saleprice, u.unitName, d.total FROM detail d INNER JOIN product p ON d.productID = p.productID INNER JOIN category c ON p.categoryID = c.categoryID INNER JOIN unit u ON p.unitID = u.unitID WHERE d.orderID = ?',
            [id], (err, result) => {
                if (err) reject(err);
                resolves(result);
            })
    })
}
module.exports = { saveOrderModel, saveDetailModel, showOrderModel, showDetailModel };