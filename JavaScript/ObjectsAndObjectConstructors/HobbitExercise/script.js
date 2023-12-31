function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`);
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295);
theHobbit.info();