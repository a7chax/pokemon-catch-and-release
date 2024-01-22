const { pokemon } = require('../../data/pokemon');
const { apiResponse, isBlank } = require('../../utils');

const getAllPokemon = () => pokemon;

module.exports = getAllPokemon;
