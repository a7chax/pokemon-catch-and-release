const books = require('../../data/books');
const { apiResponse } = require('../../utils');

const deleteBook = (request, h) => {
  const { bookId } = request.params;

  const index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response(apiResponse({
      status: 'success',
      message: 'Buku berhasil dihapus',
    }));

    response.code(200);

    return response;
  }

  const response = h.response(apiResponse({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  }));

  response.code(404);

  return response;
};

module.exports = deleteBook;
