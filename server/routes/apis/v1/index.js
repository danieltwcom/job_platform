const 
    express = require("express");
    postController = require("../../../controllers/apis/posts");

let router = express.Router();

router.use('/posts',postController);

module.exports = router;