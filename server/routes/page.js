const
    express = require("express"),
    pageController = require("../controllers/page"),
    serverController = require("../controllers/server");
let router = express.Router();

// -- Page Router -- 
router.all("*",serverController.setGuest);

router.route("/")
.get(pageController.index)

router.route("/login")
.get(pageController.login)
.post(serverController.userLogin)

router.route("/register")
.get(pageController.login)
.post(serverController.createUser)

// Board route
router.route("/board")
.get((req,res) => {
    pageController.board(req,res);
})

router.route("/post")
.get((req,res) => {
    pageController.post(req,res);
})

// router.get("/post/:id",pageController.post);
// router.get("/myposts", pageController.myposts);
// router.get("/myapplication",pageController.myapplication);



module.exports = router;