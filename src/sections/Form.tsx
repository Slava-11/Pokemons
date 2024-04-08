import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Icon } from "../components/Icon";
import { SettingsWindow } from "../components/SettingsWindow";

export const Form = () => {
  const [search, setSearch] = useState(null);
  const [active, setActive] = useState(true);
  const clearRow = () => {
    setSearch("");
  };
  const openSettings = () => {
    setActive(!active);
  };
  return (
    <form className="px-[20px]">
      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-[100%] text-[20px] p-[10px] rounded-[20px] px-[50px]"
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
        className="w-[40px] h-[40px] rounded-[50%] border-solid border-black border-[3px] flex justify-center items-center top-[20px] right-[20px] cursor-pointer"
        onClick={openSettings}
      >
        <FiSettings />
      </Icon>
      <SettingsWindow active={active} setActive={setActive} />
    </form>
  );
};
