import { usePokemon } from '../hooks/usePokemon';

export const Pokemons = () => {
    const {data} = usePokemon()
  return (
    <section>
        {data && data?.results && data?.results.map((pokemon) => (
            <>
            <h2>{pokemon.name}</h2>
            <h1>+</h1>
            </>
        ))}
    </section>
  )
}
