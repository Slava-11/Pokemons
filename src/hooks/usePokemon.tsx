import {useContext} from 'react'
import { Pokemons } from '../context/PokemonContext';

export const usePokemon = () => {
    return useContext(Pokemons)
}
