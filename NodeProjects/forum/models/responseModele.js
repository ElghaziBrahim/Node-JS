const mongoose = require("mongoose")

const response = mongoose.model("response", new mongoose.Schema({
    user_id: String,
    question_id: String,
    response: String,
    Date: { type: Date, default: new Date() }
}), "responses")

module.exports = response