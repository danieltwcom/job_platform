const
    express = require('express'),
    postService = require("../../../services/posts");
let router = express.Router();

// -- API Post Controller --
router.route('/')
.get((req,res) => {
    postService.getPosts((req,res,result) => { res.json(result); });
})
.put((req,res) => {
    postService.createPost((req,res,result) => { res.json(result); });
});

router.route('/:id')
.get((req,res) => {
    postService.getPostWithId((req,res,result) => { res.json(result); });
})
.put((req,res) => {
    postService.updatePost((req,res,result) => { res.json(result); });
})
.delete((req,res) => {
    postService.deletePost((req,res,result) => { res.json(result); });
});

module.exports = router;