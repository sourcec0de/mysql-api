/*
 * GET home page.
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'YOUR_HOST',
    user: 'YOUR_USER',
    port: 3306,
    password: 'YOUR_PASSWORD',
    database: 'YOUR_DB_NAME'
});


exports.exec = function(req, res) {
    if (connection) {
        connection.query(req.rawBody, function(err, result) {
            if (err) return res.json(err,500);
            res.json(result)
        });
    }else{
        res.json({error:"Not Connected to MYSQL"},500)
    }
};