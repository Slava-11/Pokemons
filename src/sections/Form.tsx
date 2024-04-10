import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Icon } from "../components/Icon";
import { SettingsWindow } from "../components/SettingsWindow";
import { usePokemonContext } from "../context/PokemonContext";

export const Form = () => {
  const { search, setSearch } = usePokemonContext();
  const [formSettings, setFormSettings] = useState({active: true, type: 'text'});
  const clearRow = () => {
    setSearch("");
  };
  const openSettings = () => {
    setFormSettings(!formSettings.active);
  };
  return (
    <form className="px-[20px]">
      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type={formSettings.type}
          placeholder="Search"
          className="w-[100%] text-[20px] p-[10px] rounded-[20px] px-[50px] border-solid border-boxShadow border-[3px]"
        />
        <Icon className="top-[10px] left-[10px]">
          <BiSearchAlt2 />
        </Icon>
        <Icon
          onClick={clearRow}
          className="top-[10px] right-[10px] cursor-pointer"
        >
          <RxCross2 />
        </Icon>
      </div>
      <Icon
        className="w-[40px] h-[40px] rounded-[50%] border-solid border-boxShadow border-[3px] flex justify-center items-center top-[20px] right-[20px] cursor-pointer"
        onClick={openSettings}
      >
        <FiSettings />
      </Icon>
      <SettingsWindow formSettings={formSettings} setFormSettings={setFormSettings} />
    </form>
  );
};
