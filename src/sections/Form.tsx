import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export const Form = () => {
  const [search, setSearch] = useState(null);
  return (
    <form>
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" />
        <div>
          <BiSearchAlt2 />
        </div>
        <div>
          <RxCross2 />
        </div>
      </div>
      <div>
        <FiSettings />
      </div>
    </form>
  );
};