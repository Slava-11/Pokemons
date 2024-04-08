import { usePokemon } from "../hooks/usePokemon";

export const Pokemons = () => {
  const { data } = usePokemon();


  return (
    <section>
      {/* {data?.about?.map((pokemon, index) => (
        <div key={pokemon.id}>
          <img src={data.form[index].sprites.front_default} alt="no pokemon" />
          <h2>{pokemon.name}</h2>
        </div>
      ))} */}
    </section>
  );
};
