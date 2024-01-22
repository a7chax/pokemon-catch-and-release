const getAllPokemon = require('./getAllPokemon');
const catchPokemon = require('./catchPokemon');
const addMyPokemon = require('./addMyPokemon');
const getAllMyPokemon = require('./getAllMyPokemon');
const releaseMyPokemon = require('./releaseMyPokemon');
const updateMyPokemon = require('./updateName');

const pokemonHandler = {
  getAllPokemon,
  catchPokemon,
  addMyPokemon,
  getAllMyPokemon,
  releaseMyPokemon,
  updateMyPokemon,
};

module.exports = pokemonHandler;
