import { usefindPokemon } from "../../hooks/useFilterPokemons";
import { usePokemonContext } from "../../context/PokemonContext"; 
import { LiaWeightHangingSolid } from "react-icons/lia";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { AiTwotoneExperiment } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { PokemonBaseStat } from "../PokemonBaseStat";
import { AboutPokemonCharacteristic } from "./AboutPokemonCharacteristic";

export const PokemonCard = () => {
  const { pokemonCard, setPokemonCard, data, setPokemonId, pokemonId } =
    usePokemonContext();
  const clasName = `bg-fireElement w-[100%] h-[100vh] fixed top-0 left-0 flex flex-col justify-center items-center z-50 overflow-y-auto ${
    pokemonCard ? "hidden" : "block"
  }`;
  const [findPokemon] = usefindPokemon();
  const closePokemonCard = () => {
    setPokemonCard(!pokemonCard)
  }

  return (
    <section className={clasName}>
      <div className="relative z-60 flex items-center">
      <BsArrowLeft className="text-[30px] cursor-pointer" onClick={closePokemonCard}/>
      <h2>{findPokemon?.name}</h2>
      </div>
      <div className="bg-white rounded-[10px] max-w-[400px] w-[100%] px-[15px] mobile:mt-[180px] forDesktop:mt-[100px]">
        <div className="flex ">
          <MdKeyboardArrowLeft onClick={() => setPokemonId(pokemonId -1)} className="text-[40px] cursor-pointer"/>
          <img
            className="w-[200px] mt-[-130px] mx-auto"
            src={findPokemon?.forms[0].sprites.front_default}
            alt="no pokemon"
          />
          <MdKeyboardArrowRight onClick={() => setPokemonId(pokemonId +1)} className="text-[40px] cursor-pointer"/>
        </div>
        <div className="flex justify-center gap-[10px]">
          {findPokemon?.types.map((type) => (
            <p className="bg-fireElement w-fit p-[5px] text-[14px] rounded-[8px] text-white font-bold">
              {type.type.name}
            </p>
          ))}
        </div>
        <h2 className="text-center font-bold text-[18px] mt-[20px]">About</h2>
        <div className="flex justify-center items-center gap-[20px] mt-[40px]">
          <AboutPokemonCharacteristic
            icon={<LiaWeightHangingSolid />}
            about={findPokemon?.weight}
            nameCharacteristic="Weight"
            measure="kg"
          />
          <div className="w-[2px] h-[50px] bg-boxShadow "></div>
          <AboutPokemonCharacteristic
            icon={<LiaRulerVerticalSolid />}
            about={findPokemon?.height}
            nameCharacteristic="Height"
            measure="m"
          />
          <div className="w-[2px] h-[50px] bg-boxShadow "></div>
          <AboutPokemonCharacteristic
            icon={<AiTwotoneExperiment />}
            about={findPokemon?.base_experience}
            nameCharacteristic="Experience"
          />
          <div></div>
        </div>
        <p className="mt-[20px] text-[14px] leading-6 text-center">
          {findPokemon?.species.flavor_text_entries[0].flavor_text}
        </p>
        <h2 className="text-center font-bold text-[18px] mt-[20px]">
          Base Stats
        </h2>
        <PokemonBaseStat pokemonStats={findPokemon?.stats} />
      </div>
    </section>
  );
};
