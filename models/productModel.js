const con = require('../config/db');

const getProductModel = () => {
    return new Promise((resolves, reject) => {
        con.query('SELECT * FROM product p INNER JOIN category c ON p.categoryID = c.categoryID INNER JOIN unit u ON p.unitID = u.unitID', (err, result) => {
            if (err) reject(err);
            resolves(result);
        });
    });
};

const editProductModel = (quantity, productID) => {
    return new Promise((resolves, reject) => {
        con.query('UPDATE product SET qty = qty - ? WHERE productID = ?', [quantity, productID], (err, result) => {
            if (err) reject(err);
            resolves(result);
        })
    })
}

const checkProductModel = (id) =>{
    return new Promise((resolves, reject)=>{
        con.query('SELECT qty FROM product WHERE productID = ?',[id],(err, result)=>{
            if(err)reject(err);
            resolves(result);
        })
    })
}

module.exports = { getProductModel, editProductModel, checkProductModel };