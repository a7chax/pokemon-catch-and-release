const { nanoid } = require('nanoid');
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

const addMyPokemon = (req, res) => {
  const { name, pokemonName, images } = req.payload;

  const id = nanoid(16);

  const getCurrentMyPokemonLength = myPokemon.length;

  const getFibonaccibyCurrentMyPokemonLength = generateFibonacciSequence(getCurrentMyPokemonLength);

  const newMyPokemon = {
    name: `${name}-${getFibonaccibyCurrentMyPokemonLength}`,
    pokemonName,
    images,
    id,
  };

  myPokemon.push(newMyPokemon);

  return `Success add ${pokemonName} to My Pokemon`;
};

module.exports = addMyPokemon;
