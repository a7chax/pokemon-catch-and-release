const books = require('../../data/books');
const { isBlank, apiResponse } = require('../../utils');

const updateBook = (request, h) => {
  const { bookId } = request.params;

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  const updatedAt = new Date().toDateString();

  const index = books.findIndex((book) => book.id === bookId);

  if (isBlank(name)) {
    const response = h.response(apiResponse({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    }));

    response.code(400);

    return response;
  }

  if (readPage > pageCount) {
    const response = h.response(apiResponse({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    }));

    response.code(400);

    return response;
  }

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

    const response = h.response(apiResponse({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    }));

    response.code(200);
    return response;
  }
  const response = h.response(apiResponse({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  }));

  response.code(404);

  return response;
};

module.exports = updateBook;
