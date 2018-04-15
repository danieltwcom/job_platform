const 
    postService = require("../services/posts");

// -- Page Controller --
function index (req,res){
    res.render('login');
};

function login (req,res){
    res.render('login',{alert:" "});
};

function board (req,res){
    if (!req.query.page){
        req.query.page = 1;
    }
    if (!req.query.limit){
        req.query.limit = 10;
    }

    postService.getLastPostWithOffset(req,res,(result) => {
        console.log(result);
        res.render("board", {
            role: req.session.role,
            jobList: result,
            pageNumber: req.query.page
        }); 
    });
};

function post (req,res){
    console.log(req.session.role)
    console.log(req.query.postId);
    postService.getPostWithId( req,res,(result) => { res.render("post", {post:result}); });
};

module.exports = {
    index:index,
    login:login,
    board:board,
    post:post,
};