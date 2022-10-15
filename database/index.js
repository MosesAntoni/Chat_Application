const {  createPool  }= require('mysql')

const pool=createPool({
    host:"localhost",
    user:"root",
    password:"Ms@#12ms",
    database:"list",
    connectionLimit:10
    
})

pool.query(`select * from Persons `,(err,result,fields)=>{
    if(err)
    {
        return console.log(err);
    }
    return console.log(result);
})