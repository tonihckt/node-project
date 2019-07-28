// const users = require("../resources/users"); // conecta con el json (./resources/users)
const mongo = require("./connect");
const { DB_NAME } = require("./config");

module.exports = {
    getUsers: function() {
        // return users; // json
        const db = mongo.instance().db(DB_NAME); // conceccion de mongo
        const users = db.collection("users").find({}).toArray();
        return users;
    },
    getUserById: function(id) {
        return users.filter(user=>user._id===id);
    },
    getUserByAgeRange: function(lower = 0, higher = 99) {
        // return users.filter(user=>user.age >= lower && user.age <= higher);
        const db = mongo.instance().db(DB_NAME); // conceccion de mongo
        const users = db.collection("users").find({
            age: {
                $gte: Number(lower),
                $lte: Number(higher)
            }
        }).toArray();
        return users;
    }
}

///////////////////////////////////////////

// const mongo = require('./connect')
// const { DB_NAME } = require('./config')

// /**
//  * Retorna la collecion de Users
//  * 
//  * @param {object} filter Paramátros para filtar los datos
//  */
// const getUserCollection = (filter = {}) => {
//     const db = mongo.instance().db(DB_NAME)
//     return db.collection('users').find(filter).toArray()
// }

// module.exports = {
//     getUsers: function () {
//         return getUserCollection({});
//     },
//     getUserById: function (id) {
//         return getUserCollection({
//             _id: id
//         })
//     },
//     getUserByAgeRange: function (lower = 0, higher = 99) {
//         return getUserCollection({
//             age: {
//                 $gte: Number(lower),
//                 $lte: Number(higher)
//             }
//         })
//     }
// }