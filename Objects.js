let book1 = {
    title: 'The Horizone Og The Sun',
    author: 'Ahmed Faris',
    publishedYear: 2010,
    displayInfo: function () {
        console.log('Book : title(' + this.title + ') - author(' + this.author + ') - publishedYear(' + this.publishedYear + ')')
    }
}
/* book1.displayInfo()
book1.author = 'said samir'
book1.displayInfo() */

function Library(name) {
    this.name = name;
    this.books = [];
    this.addBook = function (book) {
        if (typeof book === 'object') {
            this.books.push(book)
        }
    }
}
let Lib1 = new Library('City Library')
let book2 = {
    title: 'The Cultivation God',
    author: 'Makouar Karif',
    publishedYear: 2015,
    displayInfo: function () {
        console.log('Book : title(' + this.title + ') - author(' + this.author + ') - publishedYear(' + this.publishedYear + ')')
    }
}
Lib1.addBook(book1)
Lib1.addBook(book2)
for (let val in Lib1) {
    console.log(Lib1[val])
}
Lib1.books.forEach((b) => {
    b.displayInfo()
});


const Ebook = {
    __proto__: book1,
    fileSize: '200KB',
    displayInfo: function () {
        console.log('Book : title(' + this.title + ') - author(' + this.author + ') - publishedYear(' + this.publishedYear + ') - Size File(' + this.fileSize + ')')
    }
};
Ebook.displayInfo()




