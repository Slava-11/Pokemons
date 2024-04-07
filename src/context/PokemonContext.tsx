import { createContext, useEffect, useState } from "react";
import { api } from "../api/api";

const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=100'

export const Pokemons = createContext(null);

export const PokemonsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([])

  useEffect(() => {
    api(URL)
    .then((result) => setData(result))
    data.forEach((pokemon) => (
        fetch(pokemon?.results?.url)
        .then((data) => data.json())
        .then((res) => setImg(res))
    ))
  }, []);
  console.log(img)
  return (
    <Pokemons.Provider value={{ data, setData }}>{children}</Pokemons.Provider>
  );
};
///////////////////////////////////////////////ПОВТОРИ САМ