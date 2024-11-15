import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import oip from '../assets/OIP.jpg';

const Header = () => {
  const handleSidebar = () => {
    controlSidebar(true); 
  };

  return (
    <header className="bg-green-700 h-[10vh] flex items-center ">
      <nav className="flex justify-between items-center w-full px-10">
        <div className="flex  items-center justify-evenly">
          {/* <button className="text-white" onClick={handleSidebar}>
            <MenuIcon />
          </button> */}
          <img src="../assets/analyze.png" alt="" />
          <span className="text-white font-bold text-2xl sm:text-4xl">
            AgroIn
          </span>
        </div>

        <div className="flex items-center w-[40px] h-[40px]">
          <img
            className="rounded-full bg-white"
            src={oip}
            alt="Profile"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
