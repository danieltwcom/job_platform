const 
    server = require('./server')();

server.create();
server.start();
// // Require all modules
// const express = require("express");
// const session = require("express-session");
// const dotenv = require('dotenv').config();
// const bodyParser = require("body-parser");
// const path = require("path");
// const pg = require("pg");

// // Server variables setup
// const port = process.env.SERVER_PORT || 56789;
// let app = express();
// const server = require("http").createServer(app);
// let io = require("socket.io")(server);
// let pF = path.resolve(__dirname, "html");

// // Jade Pug
// app.set("view engine","pug");
// app.set("views", [ "templates","templates/blocks", "templates/inc" ]);

// // PostgrSQL connection
// let pool = new pg.Pool({
//     user: process.env.PGSQL_USER,
//     host: process.env.PGSQL_HOST,
//     password: process.env.PGSQL_PASSWORD,
//     database: process.env.PGSQL_DATABASE,
//     max: process.env.PGSQL_MAX
// });

// // Sessions setup
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true,
// }));

// // Route folders
// app.use("/style", express.static("css"));
// app.use("/script", express.static("script"));
// app.use("/image", express.static("image"));
// app.use("/inc", express.static("inc"));

// // Route
// app.all("*",userAuthentication);

// app.get("/",function(req,resp){
//     if (req.session.user){

//     }else{
//         resp.render('login',{ page: "login", alert: "alert box"})
//     }
// });

// app.get("/board",function (req,resp){
//     resp.render('board',{
//         user: req.session.user, // replace req.session.user
//         page: "board", 
//         jobList: [{
//             looking: ["Unverified","Certificated"],
//             title: "Uvic need 2 interpreter",
//             date: "2018/02/12",
//             employer: "Jason Chen",
//             type: "Interpreter",
//             post_id: 1
//         },
//         {
//             looking: ["Certified"],
//             title: "SFU hiring transcriber",
//             date: "2013/2/02",
//             employer: "Ray Hu",
//             type: "Transcriber",
//             post_id: "2"
//         }] 
//     });
// });

// app.get("/post/:postid",function (req,resp){
//     req.session.post_id = req.param.post_id;
//     resp.render("post",{});
// });

// function setDefaultUser(){
//     if(!req.session.user){
//         req.session.user = "guest";
//     }
// }

// function requireAuthentication(){
//     if(!(req.session.user == "interpreter" || req.session.user == "transcriber")){
//         app.render("login",{alert:"Page require to login"})
//     }
// }
// // Server listening
// server.listen(port, function (err) {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log(port + " is running");
// });