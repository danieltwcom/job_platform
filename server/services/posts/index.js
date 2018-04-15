const
    db = require("../../models/database");

// -- GET --
// get all posts
function getPosts (req,res,callback){
    db.query("SELECT * FROM posts",[],
    function(result){
        callback(result.rows);
    });
}

// get last posts with offset
function getLastPostWithOffset (req,res,callback){
    let limit = req.query.limit;
    let offset = (req.query.page-1) * req.query.limit;
    db.query("SELECT *, TO_CHAR(date_create,'DD Mon YYYY') as formated_date FROM posts ORDER BY date_create LIMIT $1 OFFSET $2",
    [limit,offset],function(result){
        callback(result.rows);
    });
}

// get single post with id
function getPostWithId (req,res,callback){
    db.query("SELECT posts.*,TO_CHAR(posts.date_create,'DD Mon YYYY') as formated_date, users.first_name, users.last_name, users.username FROM posts LEFT JOIN users ON users.id = posts.user_id WHERE posts.id = $1",
    [req.query.postId],
    function(result){
        callback(result.rows[0]);
    });
}

// -- CREATE --
// create a post
function createPost (req,res,callback){
    db.query("INSERT INTO posts (title,detail) VALUES ($1,$2)",[req.body.title,req.body.detail],
    function(result){
        callback(result.rows);
    });
}

// -- UPDATE --
function updatePost (req,res,callback){
    db.query("UPDATE posts SET title = $1, detail = $2 WHERE id = $3",[req.body.title,req.body.detail,req.body.id],
    function(result){
        callback(result.rows);
    });
}

// -- DELETE --
function deletePost (req,res,callback){
    db.query("DELETE FROM posts WHERE id = $1",[req.body.id],
    function(result){
        callback(result.rows);
    });
}

module.exports = {
    getPosts:getPosts,
    getPostWithId:getPostWithId,
    createPost:createPost,
    updatePost:updatePost,
    getLastPostWithOffset:getLastPostWithOffset
}