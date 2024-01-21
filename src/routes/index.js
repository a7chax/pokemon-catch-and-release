const bookRoutes = require('./book');
const pokemonRoutes = require('./pokemon');

const routes = [
  ...bookRoutes,
  ...pokemonRoutes,
];

module.exports = [...routes];
