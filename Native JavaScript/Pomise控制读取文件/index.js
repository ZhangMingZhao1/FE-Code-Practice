const fs = require("fs");

function readFile(fileName) {
    return new Promise(function(resolve,reject) {
        fs.readFile("in.txt", { encoding: "utf8" }, function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data)
        })
    })
}

let p = readFile("in.txt")
p.then(data=>{console.log(data)}).catch((err)=>console.log(err))