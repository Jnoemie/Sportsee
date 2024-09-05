import React from 'react';
import '../../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-icons">
      <img src="./yoga.svg" className='navBtn' alt="Bouton de navigation" />
            <img src="./piscine.svg" className='navBtn' alt="Bouton de navigation" />
            <img src="./velo.svg" className='navBtn' alt="Bouton de navigation" />
            <img src="./muscu.svg" className='navBtn' alt="Bouton de navigation" />
      </nav>
      <p className="copyrights">Copyright SportSee 2023</p>
    </div>
  );
};

export default Sidebar;