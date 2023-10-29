const books = require('../../data/books');
const { isBlank, apiResponse } = require('../../utils');

const getBookById = (request, h) => {
  const { bookId } = request.params;

  const book = books.filter((n) => n.id === bookId)[0];

  if (!isBlank(book)) {
    return apiResponse({
      status: 'success',
      data: {
        book,
      },
    });
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = getBookById;
