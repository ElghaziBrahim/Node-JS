const express = require("express")
const questionRoute = require("./routers/questionRoute")
const responseRoute = require("./routers/responseRoute")
const userRoute = require("./routers/userRouter")
const session = require("express-session")



const mongoose = require("mongoose")



const app = express()
app.use(express.urlencoded({ extended: true }))
mongoose.connect("mongodb://127.0.0.1:27017/forum2")
app.use(express.static("./public"))

app.use(session({
    secret: "Un secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use((req, res, next) => {
    req.data = {
        user: [],
        questions: []
    }
    if (req.session.user) {
        req.data.user = req.session.user
    }
    next()
})



app.set("views", "./views")
app.set("view engine", "pug")
app.use("/questions", questionRoute)
app.use("/responses", responseRoute)
app.use("/users", userRoute)
app.get("/", (req, res) => {
    res.redirect("/questions")
})
app.get("/login", (req, res) => {
    res.render("login")
})
app.get("/signup", (req, res) => {
    res.render("signup")
})
app.get("/logout", (req, res) => {
    req.session.user = {}
    res.redirect("/questions")
})
app.listen(3000, () => console.log("server is running"))