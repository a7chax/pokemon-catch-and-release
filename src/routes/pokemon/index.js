const pokemonHandler = require('../../handler/pokemon');

const routes = [
  {
    method: 'GET',
    path: '/pokemon',
    handler: pokemonHandler.getAllPokemon,
  },
  // {
  //   method: 'GET',
  //   path: '/pokemon/{pokemonId}',
  //   handler: bookHandler.getAllBooks,
  // },
  // {
  //   method: 'GET',
  //   path: '/pokemon/mine',
  //   handler: bookHandler.getBookById,
  // },
];

module.exports = routes;
