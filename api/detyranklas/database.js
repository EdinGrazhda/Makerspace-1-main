const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'school',
    port:3306,
});

connection.connect((err)=>{
    if (err)throw err;
    console.log('MySQL database is connected successfully!');
});

module.exports=connection;