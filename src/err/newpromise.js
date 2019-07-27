const fs = require("fs");

const newPromise = new Promise((resolve, reject) => {
    fs.readFile("../notes_func/resources/name.txt","utf8",(err, data) => {
        if (err) {
            reject('fallo en la lectura del archivo', err);
        }
        resolve(data);
    })
});

newPromise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("hay error!", err);
});