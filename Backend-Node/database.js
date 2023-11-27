const { createPool } = require('mysql2')

const pool = createPool({
    host:"localhost",
    user: "root",
    password: "root",
    database: "shoppdb"
})

pool.query(`select * from product`, (err, result, feild) =>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})