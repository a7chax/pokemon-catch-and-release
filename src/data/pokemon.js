const myPokemon = [];
const pokemon = [
  {
    name: 'Bulbasaur',
    images: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    id: 1,
    type: ['Grass', 'Poison'],
    moves: ['Tackle', 'Growl', 'Leech Seed'],
  },
  {
    name: 'Ivysaur',
    images: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    id: 2,
    type: ['Grass', 'Poison'],
    moves: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip', 'Poison Powder'],
  },
  {
    name: 'Venusaur',
    images: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    id: 3,
    type: ['Grass', 'Poison'],
    moves: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip', 'Poison Powder', 'Sleep Powder', 'Take Down'],
  },
  {
    name: 'Charmander',
    images: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    id: 4,
    type: ['Fire'],
    moves: ['Scratch', 'Growl', 'Ember'],
  },
  {
    name: 'Charmeleon',
    id: 5,
    images: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
    type: ['Fire'],
    moves: ['Scratch', 'Growl', 'Ember', 'Dragon Rage', 'Scary Face'],
  },
  {
    name: 'Charizard',
    images: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    id: 6,
    type: ['Fire', 'Flying'],
    moves: ['Scratch', 'Growl', 'Ember', 'Dragon Rage', 'Scary Face', 'Fire Spin', 'Wing Attack'],
  },
  {
    name: 'Squirtle',
    id: 7,
    images: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    type: ['Water'],
    moves: ['Tackle', 'Tail Whip', 'Water Gun'],
  },
  {
    name: 'Wartortle',
    id: 8,
    images: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
    type: ['Water'],
    moves: ['Tackle', 'Tail Whip', 'Water Gun', 'Bite', 'Withdraw'],
  },
  {
    images: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    name: 'Blastoise',
    id: 9,
    type: ['Water'],
    moves: ['Tackle', 'Tail Whip', 'Water Gun', 'Bite', 'Withdraw', 'Skull Bash'],
  },
  // Add more Pokémon as needed
];

module.exports = { pokemon, myPokemon };
