const questionModele = require("../models/questionModule")
const responseModule = require("../models/responseModele")
const userModule = require("../models/usersModule")
async function getQuestions(req, res) {
    const questions = await questionModele.find().sort({ date: -1 })
    req.data.questions = questions
    console.log(req.data.user)
    res.render("home", req.data)
}
async function addQuestion(req, res) {
    const question = new questionModele({
        content: req.body.question,
        user_id: req.body.id
    })
    question.save()
    res.redirect("/")
}
async function getQuestionById(req, res) {

    const q = await questionModele.findOne({ _id: req.params.id })
    const responses = await responseModule.find({ question_id: req.params.id }).sort({ Date: -1 })
    const users = await userModule.find()

    const newresp = responses.map(r => {
        let email_user = "unknowns@demo.com";
        const usernow = users.find((user) => user._id == r.user_id);
        if (usernow) {
            email_user = usernow.email;
        }
        return { ...r._doc, user_email: email_user };
    });
    res.render("question", { question: q, responses: newresp })
}
module.exports = { getQuestions, addQuestion, getQuestionById }