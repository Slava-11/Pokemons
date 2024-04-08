import { createContext, useEffect, useState } from "react";
import { api } from "../api/api";

const URL = "https://pokeapi.co/api/v2/pokemon/?limit=100";

export const Pokemons = createContext(null);

export const PokemonsProvider = ({ children }) => {
  const [data, setData] = useState({ about: [], form: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const {results} = await response.json();

        const pokemonAbout = results.map(({ url }) => //url = url.url
          fetch(url).then((response) => response.json())
        );

        const pokemonDataAbout = await Promise.all(pokemonAbout);

        const pokemonForm =  pokemonDataAbout.map((pokemon) =>
          fetch(pokemon.forms[0].url).then((response) => response.json()) //Если б не выбрали нулевой елемент(pokemon.forms[0]) нужно было б еще map
        );
        const pokemonDataForm = await Promise.all(pokemonForm);

        setData({ about: pokemonDataAbout, form: pokemonDataForm });
      } catch (error) {
        console.log("eeeeeeeeeeeeeeeeeee");
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <Pokemons.Provider value={{ data, setData }}>{children}</Pokemons.Provider>
  );
};
///////////////////////////////////////////////ПОВТОРИ САМ
