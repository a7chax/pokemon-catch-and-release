const pokemonHandler = require('../../handler/pokemon');

const routes = [
  {
    method: 'GET',
    path: '/pokemon',
    handler: pokemonHandler.getAllPokemon,
  },
  {
    method: 'GET',
    path: '/pokemon/catch',
    handler: pokemonHandler.catchPokemon,
  },
  {
    method: 'POST',
    path: '/pokemon/mine',
    handler: pokemonHandler.addMyPokemon,
  },
  {
    method: 'GET',
    path: '/pokemon/mine',
    handler: pokemonHandler.getAllMyPokemon,
  },
  {
    method: 'DELETE',
    path: '/pokemon/mine',
    handler: pokemonHandler.releaseMyPokemon,
  },
  {
    method: 'PUT',
    path: '/pokemon/mine',
    handler: pokemonHandler.updateMyPokemon,
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
