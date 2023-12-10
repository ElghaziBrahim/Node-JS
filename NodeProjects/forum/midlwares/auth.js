const userModele = require("../models/usersModule")

async function login(req, res, next) {
    const user = await userModele.findOne({ email: req.body.email })
    if (user) {
        if (user.password == req.body.password) {

            req.user = { nom: user.nom, email: user.email, id: user._id }
        } else {
            console.log("password not correct")
            req.user = {}
        }
    } else {
        req.user = {}
        console.log("email not correct")
    }
    next()
}
module.exports = login