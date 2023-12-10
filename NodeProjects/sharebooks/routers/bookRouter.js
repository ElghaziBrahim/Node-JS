const router = require("express").Router()
const mongoose = require("mongoose")
const Book = new mongoose.model('Book', new mongoose.Schema({
    title: String,
    author: String,
    year: Number,
    sharedBy: String
}), "books")

router.get("/remove/:id", async function (req, res) {
    const id = req.params.id
    await Book.deleteOne({ _id: id })
    res.redirect("/books")
})
router.post("/add", function (req, res) {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        sharedBy: req.data.user.username
    })
    console.log("add book :")
    book.save()
    res.redirect('/books')
})
router.get('/', async function (req, res) {
    const books = await Book.find()
    req.data.books = books
    res.render('home', req.data)
})


module.exports = router