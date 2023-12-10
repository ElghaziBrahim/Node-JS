const userModele = require("../models/usersModule")

async function login(req, res) {
    if (req.user.nom) {
        req.session.user = req.user
        res.redirect("/questions")

    } else {
        res.redirect("/login")
    }
    /* const user = await userModele.findOne({ email: req.body.email })
    if (user) {
        if (user.password == req.body.password) {
            req.session.user = { nom: user.nom, email: user.email, id: user._id }
            res.redirect("/questions")
        } else {
            console.log("password not correct")
        }
    } else {
        console.log("email not correct")
    } */

}
async function addUser(req, res) {
    const user = new userModele({
        nom: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    user.save()
    res.redirect("/login")
}
module.exports = { login, addUser }