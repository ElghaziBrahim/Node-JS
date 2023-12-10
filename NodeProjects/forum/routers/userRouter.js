const router = require("express").Router()
const auth = require("../midlwares/auth")
const userController = require("../controllers/userController")

router.post("/add", userController.addUser)
router.post("/login", auth, userController.login)
module.exports = router