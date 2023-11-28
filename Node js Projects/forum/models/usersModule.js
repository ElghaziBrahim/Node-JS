const mongoose = require("mongoose")

const User = mongoose.model("User", new mongoose.Schema({
    nom: String,
    email: String,
    password: String
}))

module.exports = User