const route = require("express").Router()
const repnseController = require("../controllers/answerController")

route.post("/add", repnseController.addResponse)

module.exports = route