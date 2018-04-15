const
    apiRoute = require("./apis"),
    pageRoute = require("./page"),
    express = require("express");

function init(server){
    // Resources routes
    server.use("/style", express.static("public/css"));
    server.use("/images", express.static("public/images"));
    server.use("/src", express.static("src"));

    // Top Routes
    server.use("/api", apiRoute);
    server.use("/", pageRoute);
}

module.exports = {
    init:init
}