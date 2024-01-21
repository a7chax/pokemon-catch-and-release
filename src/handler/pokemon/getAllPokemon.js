const pokemon = require('../../data/pokemon');
const { apiResponse, isBlank } = require('../../utils');

const getAllPokemon = () => {
  const response = (apiResponse({
    status: 'success',
    data: {
      pokemon,
    },
  }));

  return response;
};

module.exports = getAllPokemon;
