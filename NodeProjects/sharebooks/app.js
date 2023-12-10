const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session");
const { redirect } = require("statuses");
const booksRouter = require("./routers/bookRouter")


const app = express()
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "Un secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
mongoose.connect('mongodb://127.0.0.1:27017/sharebooks');


const User = mongoose.model("User", new mongoose.Schema({
    username: String,
    password: String
}), "users")

app.use((req, res, next) => {
    req.data = {
        user: {},
        books: []
    };

    if (req.session.user) {
        req.data.user = req.session.user;
    }

    next();
});
app.use('/books', booksRouter);


app.get('/login', function (req, res) {
    res.render('login')
})
app.get('/signup', function (req, res) {
    res.render('signup')
})
app.get('/', function (req, res) {
    res.redirect('/books')
})
app.post('/login', async function (req, res) {
    const users = await User.find()
    const username = req.body.username
    const password = req.body.password
    const user = users.find((user) => user.password == password && user.username == username)
    if (user) {
        req.session.user = { username: user.username }
        res.redirect("/books")
    }

})

app.post('/signup', async function (req, res) {
    if (req.params.password == req.params.password2) {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        })
        console.log(user)
        user.save()
        res.redirect("/login")
    }
})


app.get("/logout", async function (req, res) {
    req.session.user = []
    res.redirect("/")
})



app.listen(3000, function () {
    console.log('server is running')
})