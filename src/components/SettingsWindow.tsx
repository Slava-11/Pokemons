import { RxCross2 } from "react-icons/rx";
import { Icon } from "./Icon";

export const SettingsWindow = ({ active, setActive }) => {
  const clasName = `bg-black w-[100%] min-h-[100vh] fixed top-0 left-0 flex justify-center items-center  ${
    active ? "hidden" : "block"
  }`;

  const closeSettings = () => {
    setActive(!active);
  };

  return (
    <div className={clasName}>
      <div className="w-[80%] h-[500px] bg-white relative rounded-[20px] flex flex-col justify-center">
        <div>
          <input type="radio" value="Srting" name="Srting" />
          <label htmlFor="Srting">Srting</label>
          <input type="radio" value="Number" name="Number" />
          <label htmlFor="Number">Number</label>
          <label>wdw</label>
        </div>
        <Icon className="top-[20px] right-[20px] cursor-pointer" onClick={closeSettings}>
          <RxCross2 />
        </Icon>
      </div>
    </div>
  );
};
