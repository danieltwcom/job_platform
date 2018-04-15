const
    db = require("../../models/database");
    bodyParser = require("body-parser");

// -- User Service --
// GET
function getUsersByUsername(req,res,callback){
    db.query("SELECT * FROM users WHERE username = $1",[req.params.username],
    function(result){
        callback(result.rows);
    });
}

// CREATE
function createUser(req,res,callback){
    db.query("INSERT INTO users (email, password, username, first_name, last_name, role, email_notification) VALUES ($1,$2,$3,$4,$5,$6,$7)",
    [req.body.email, req.body.password, req.body.username, req.body.first_name, req.body.last_name, req.body.role, req.body.email_notification],
    function(result){
        callback(result);
    });
}

// TODO UPDATE
// function updateUser(req,res,callback){
//     db.query("UPDATE SET")
// }

// MATCHING
function userAuthen(req,res,callback){
    db.query("SELECT * FROM users WHERE email = $1 and password = $2",[req.body.email,req.body.password],
    function(result){
        callback(result.rows);
    });
}

module.exports = {
    getUsersByUsername:getUsersByUsername,
    createUser:createUser,
    // updateUser:updateUser,
    userAuthen:userAuthen
}