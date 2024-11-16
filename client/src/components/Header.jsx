import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import oip from "../assets/OIP.jpg";
import { useRef } from "react";
const Header = (props) => {
  const handleSidebar = () => {
    props.controlSidebar(true);
  };

  return (
    <header className="bg-gradient-to-r from-green-800 to-green-600 h-[10vh] shadow-md flex items-center ">
      <nav className="flex justify-between items-center w-full md:px-5 px-3   ">
        <div className="flex  items-center justify-between">
          <button className="text-white sm:hidden pe-2" onClick={handleSidebar}>
            <MenuIcon />
          </button>
          <img src="../assets/analyze.png" alt="" />
          <span className="text-white font-bold text-2xl sm:text-4xl">
            AgroIn
          </span>
        </div>

        <div className="flex items-center w-[40px] h-[40px]">
          <img className="rounded-full bg-white" src={oip} alt="Profile" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
