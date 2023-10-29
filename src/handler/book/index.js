const addBook = require('./addBook');
const getAllBooks = require('./getAllBooks');
const getBookById = require('./getBookById');
const updateBook = require('./updateBook');
const deleteBook = require('./deleteBook');

const bookHandler = {
  addBook, getAllBooks, getBookById, updateBook, deleteBook,
};

module.exports = bookHandler;
