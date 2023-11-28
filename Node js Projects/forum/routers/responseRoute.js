const route = require("express").Router()
const { redirect } = require("statuses")
const responseModele = require("../models/responseModele")
const repnseController = require("../controllers/answerController")

route.post("/add", repnseController.addResponse)

module.exports = route