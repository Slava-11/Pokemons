import { PokemonsProvider } from "./context/PokemonContext";
import { Form } from "./sections/Form";
import { Header } from "./sections/Header";
import { Pokemons } from "./sections/Pokemons";

function App() {
  return (
    <PokemonsProvider>
      <main>
        <Header />
        <Form/>
        <Pokemons/>
      </main>
    </PokemonsProvider>
  );
}

export default App;
