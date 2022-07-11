export const searchPokemonsByKeyword = (pokemons, keyword) => {
  const keywordLowerCase = keyword.toLowerCase();

  const pokemonsSearched = pokemons.filter(({ name }) =>
    name.toLowerCase().includes(keywordLowerCase)
  );
  return pokemonsSearched;
};
