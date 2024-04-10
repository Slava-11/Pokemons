import { RxCross2 } from "react-icons/rx";
import { Icon } from "./Icon";

export const SettingsWindow = ({ formSettings, setFormSettings }) => {
  const clasName = `bg-transparentWhite w-[100%] min-h-[100vh] fixed top-0 left-0 flex justify-center items-center z-50 ${
    formSettings.active ? "hidden" : "block"
  }`;

  const closeSettings = () => {
    setFormSettings({...formSettings, active: !formSettings.active});
  };
  const changeType = (e) => {
    e.preventDefault()
    setFormSettings({...formSettings, type: 'number', active: !formSettings.active})
  }
  return (
    <div className={clasName}>
      <div className="w-[80%] h-[500px] bg-mainBg relative rounded-[20px] flex flex-col justify-center">
        <div>
          <button onClick={changeType}>String</button>
          <button onClick={changeType}>Number</button>
          {/* <input type="radio" value="Srting" name="Srting" />
          <label htmlFor="Srting">Srting</label>
          <input type="radio" value="Number" name="Number" />
          <label htmlFor="Number">Number</label>
          <label>wdw</label> */}
        </div>
        <Icon className="top-[20px] right-[20px] cursor-pointer" onClick={closeSettings}>
          <RxCross2 />
        </Icon>
      </div>
    </div>
  );
};
