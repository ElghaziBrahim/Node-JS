const mongoose = require("mongoose")

const Question = mongoose.model("Question", new mongoose.Schema({
    content: String,
    user_id: String,
    date: { type: Date, default: Date.now }
}), "questions")

module.exports = Question