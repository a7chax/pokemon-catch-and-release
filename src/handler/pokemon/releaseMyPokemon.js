const { myPokemon } = require('../../data/pokemon');

function getPrimeNumber() {
  const num = Math.floor(Math.random() * 100) + 1;

  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const releaseMyPokemon = (request, res) => {
  const { id } = request.query;

  const index = myPokemon.findIndex((pokemon) => pokemon.id === id);

  if (index !== -1) {
    console.log('index', getPrimeNumber());
    if (getPrimeNumber()) {
      myPokemon.splice(index, 1);
      return true;
    }

    return false;
  }

  return false;
};

module.exports = releaseMyPokemon;
