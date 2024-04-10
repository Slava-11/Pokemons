import { usePokemonContext } from "../context/PokemonContext"; 

export const useFilterPokemons = () => {
  const { data, search } = usePokemonContext();
  const searchNumber = !isNaN(search) ? Number(search) : null;

  const filteredPokemons = data?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
  (searchNumber !== null && pokemon.id.toString().includes(search))
  );
  return filteredPokemons;
};
export const usefindPokemon = () => {
  const { data, pokemonId } = usePokemonContext();
  const findPokemon = data?.filter((pokemon) =>
    pokemonId !== 0 ? pokemon.id === pokemonId : true
  );
  return findPokemon;
}