const books = require('../../data/books');
const { apiResponse, isBlank } = require('../../utils');

const getAllBooks = (request) => {
  const { name, reading, finished } = request.query;

  let mappedBooks;

  if (books.length > 1) {
    if (parseInt(finished, 2) > 1 || parseInt(reading, 2) > 1) {
      mappedBooks = books.map((item) => ({
        name: item.name,
        id: item.id,
        publisher: item.publisher,
      }));
    } else if (finished) {
      mappedBooks = books.filter((book) => book.finished === (finished === '1')).map((item) => ({
        name: item.name,
        id: item.id,
        publisher: item.publisher,
      }));
    } else if (reading) {
      mappedBooks = books.filter((book) => book.reading === (reading === '1')).map((item) => ({
        name: item.name,
        id: item.id,
        publisher: item.publisher,
      }));
    } else if (!isBlank(name)) {
      mappedBooks = books.filter((book) => book.name?.toLowerCase().includes(name?.toLowerCase())).map((item) => (
        { id: item.id, name: item.name, publisher: item.publisher }
      ));
    } else {
      mappedBooks = books.map((item) => ({
        name: item.name, id: item.id, publisher: item.publisher,
      }));
    }
  } else {
    mappedBooks = books;
  }

  const response = (apiResponse({
    status: 'success',
    data: {
      books: mappedBooks,
    },
  }));

  return response;
};

module.exports = getAllBooks;
