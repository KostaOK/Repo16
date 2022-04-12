// Only change code below this line
class Book {
    constructor(title) {
        this._title = title;
    }
    get name() {
        return this._title;
    }
    set name(newTitle) {
        this._title=newTitle;
    }
}
// Only change code above this line
const littlePrince = new Book("The Little Prince"); // Change this line
console.log(littlePrince.title); // The Little Prince
littlePrince.title = new Book("Le Petit Prince"); // Change this line
console.log(littlePrince.title); // Le Petit Prince
module.exports = Book;