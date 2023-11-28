const route = require("express").Router()
const questionController = require("../controllers/questionController")

route.get("/", questionController.getQuestions)
route.post("/add", questionController.addQuestion)
route.get("/:id", questionController.getQuestionById)
module.exports = route