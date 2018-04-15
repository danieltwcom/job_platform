// Require all modules
const express = require("express");
const session = require("express-session");
const path = require("path");
const dotenv = require('dotenv').config({
    path: path.resolve(__dirname,"../config",'.env')
});
const bodyParser = require("body-parser");


module.exports = function(){
    let app = express();
    // Create http server
    const server = require("http").createServer(app);

    let create = function(){
        let routes = require('./routes');

        // Server setting
        const port = process.env.SERVER_PORT || 56789;
        app.set("port", port);
        let io = require("socket.io")(server);

        // Jade Pug
        app.set("view engine","pug");
        app.set("views", [ "views","views/blocks", "views/inc" ]);

        // Body Parser
        app.use(bodyParser.urlencoded({
            extended:true
        }));
        
        // Sessions setup
        app.use(session({
            secret: process.env.SESSION_SECRET,
            resave: true,
            saveUninitialized: true,
        }));

        // Set up routes
        routes.init(app);
    };

    let start = function(){
        let port = app.get('port');

        // Server listening
        server.listen(port, function (err) {
            if (err) {
                console.log(err);
                return false;
            }
            console.log(port + " is running");
        });
    };

    return {
        create:create,
        start:start
    };
}