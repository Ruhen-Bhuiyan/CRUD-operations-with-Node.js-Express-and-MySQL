const mysql = require('mysql');
const databaseConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'covid'
});

databaseConn.connect(function (error) {
    if (error) throw error;
    console.log('Success');
})
module.exports = databaseConn;
