const { myPokemon } = require('../../data/pokemon');

function generateFibonacciSequence(terms) {
  const fibonacciSequence = [0, 1];

  for (let i = 2; i < terms; i++) {
    const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextTerm);
  }

  if (terms === 0) {
    return 1;
  }
  return fibonacciSequence[terms - 1];
}

const updatePokemonName = (req, res) => {
  const { id, name } = req.payload;

  const index = myPokemon.findIndex((pokemon) => pokemon.id === id);

  const getCurrentMyPokemonLength = myPokemon.length;

  const getFibonaccibyCurrentMyPokemonLength = generateFibonacciSequence(getCurrentMyPokemonLength);

  if (index !== -1) {
    myPokemon[index].name = `${name} - ${getFibonaccibyCurrentMyPokemonLength}`;
    return true;
  }

  return false;
};
module.exports = updatePokemonName;
