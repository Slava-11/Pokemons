import React, { ReactNode } from "react";
import { createContext, useEffect, useState, useContext } from "react";
import { URL } from "../constants";

export const PokemonContext = createContext(null);

export const usePokemonContext = (): Value => {
  return useContext(PokemonContext);
};

type Value = {
  data: [];
  search: string;
  pokemonId: number;
  pokemonCard: boolean;
  setData: (data: "") => void;
};

export const PokemonsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemonCard, setPokemonCard] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const { results } = await response.json();

        const pokemonAbout = await Promise.all(
          results.map(({ url }) =>
            fetch(url).then((response) => response.json())
          )
        );

        const updatePokemonAbout = await Promise.all(
          pokemonAbout.map(async (pokemon) => {
            const updatedForms = await Promise.all(
              pokemon.forms.map(async (form) => {
                const formResponce = await fetch(form.url);
                return formResponce.json();
              })
            );
            const updatedSpecies = await fetch(pokemon.species.url);
            const data = await updatedSpecies.json();
            return { ...pokemon, forms: updatedForms, species: data };
          })
        );
        const updatedPokemons = await Promise.all(
          updatePokemonAbout.map((pokemon) => {
            const {
              cries,
              game_indices,
              held_items,
              location_area_encounters,
              moves,
              past_abilities,
              past_types,
              sprites,
              ...updatedPokemon
            } = pokemon;
            return updatedPokemon;
          })
        );
        setData(updatedPokemons);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const value: Value = {
    data,
    setData,
    search,
    setSearch,
    pokemonId,
    setPokemonId,
    pokemonCard,
    setPokemonCard,
  };
  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
