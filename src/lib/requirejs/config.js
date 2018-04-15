requirejs.config({
    baseUrl: "src",
    paths:{
        // Library
        jquery: ["https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min",
        "lib/jquery/jquery-3.3.1.min"],
        bootstrap: ["lib/bootstrap/bootstrap.bundle.min"],

        // Page scripts
        board: ["scripts/board"],
        login: ["scripts/login"],
        navbar: ["scripts/navbar"],

        // Custom scripts
        validation: ["scripts/validation"],
        common:["scripts/common"],
    },
    shim: {
        bootstrap : {
            deps : ["jquery"]
        }
    }
});