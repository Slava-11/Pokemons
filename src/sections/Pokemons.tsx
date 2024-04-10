import { PokemonCard } from "../components/PokemonCard/PokemonCard";
import { useFilterPokemons } from "../hooks/useFilterPokemons";
import { usePokemonContext } from "../context/PokemonContext"; 

export const Pokemons = () => {
  const { data, setPokemonId, pokemonCard, setPokemonCard, setSearch } =
    usePokemonContext();
  const pokemons = useFilterPokemons();
  const capitalLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const findPokemonId = (id) => {
    setSearch('')
    setPokemonId(id);
    setPokemonCard(!pokemonCard);
  };

  return (
    <section className="bg-secondBg mx-[10px] mt-[20px] flex flex-wrap justify-center items-center gap-[10px] py-[30px] rounded-[10px] border-solid border-boxShadow border-[3px] h-[100vh] overflow-y-auto">
      {pokemons?.map((pokemon) => (
        <div
          className="relative max-w-[250px] h-[320px] w-[100%] border-solid border-boxShadow border-[3px] rounded-[10px] overflow-hidden cursor-pointer"
          key={pokemon.id}
          onClick={() => findPokemonId(pokemon.id)}
        >
          <div className="absolute z-20 w-[100%]">
            <h3 className="text-right pt-[15px] pr-[15px] text-[15px]">
              #{pokemon.id}
            </h3>
            <img
              src={pokemon.forms[0].sprites.front_default}
              alt="no pokemon"
              className="w-[220px] mx-auto"
            />
            <h2 className="text-center mt-[20px] text-[20px]">
              {capitalLetter(pokemon.name)}
            </h2>
          </div>
          <div className="absolute w-[100%] h-[100%] bg-cardBg top-[150px] left-0 z-10"></div>
        </div>
      ))}
      <PokemonCard />
    </section>
  );
};
