const
    userService = require("../services/users");
    postService = require("../services/posts");

// -- Server Controller --
module.exports = {
    // set default guest role
    setGuest: function setGuest (req,res,next){
        if(!req.session.role){
            req.session.role = "guest";
        }
        next();
    },
    // check login
    checkLogin: function checkLogin (req,res){
        if (req.session.role == "guest") {
            res.redirect("/");
        }
    },
    // user login
    userLogin: function userLogin (req,res){
        userService.userAuthen(req,res,result => {
            if(result.length == 1){
                // TODO result[0]?
                req.session.role = result[0].role;
                req.session.username = result[0].username;
                res.send({
                    status:"success"
                });
            }else{
                res.send({
                    status:"fail"
                });
            }
        });
    },
    createUser: function createUser (req,res,next) {
        userService.createUser(req,res,function(result){
            if(result.rowCount==1){
                res.send({
                    status:"success"
                });
            }else{
                res.send({
                    status:"fail"
                });
            }
        });
    }
}