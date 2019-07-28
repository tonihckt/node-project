const users = require("../resources/users");

module.exports = {
    getUsers: function() {
        return users;
    },
    getUserById: function(id) {
        return users.filter(user=>user._id===id);
    },
    getUserByAgeRange: function(lower = 0, higher = 99) {
        return users.filter(user=>user.age >= lower && user.age <= higher);
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