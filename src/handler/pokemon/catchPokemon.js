const catchPokemon = () => {
  const randomInteger = Math.floor(Math.random() * 2) + 1;

  // Determine if the event is successful based on odd or even
  const isSuccess = randomInteger % 2 === 0;

  return isSuccess;
};

module.exports = catchPokemon;
