import React, { useState } from 'react';

import Sidebar from './maincomponent/Sidebar';
import MainContent from './maincomponent/MainContent';
import './main.css';


function Main() {
  const [activeMenu, setActiveMenu] = useState("speech");
  
  return (
    <div className="layout-container">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <MainContent />
    </div>
  );
}

export default Main;
