// incluir coneccion con muduo mongodb
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';

// module.exports = (()=>{

//     function connect() {
//         return new Promise((resolve, reject)=>{
//             // added { useNewUrlParser: true }
//             MongoClient.connect(url, { useNewUrlParser: true }).then(client => {
//                 const db = client.db('my-db');
//                 const collection = db.collection('my-collection');
//                 return collection.find({}).limit(1).toArray();
//             })
//             .then(response => console.log(response))
//             .catch(error => console.error(error));
//         });
//     }
//     return {
//         connect,
//     }
// })();