// components/Layout.jsx
import React, { useState } from 'react';
import Sidebar from './maincomponent/Sidebar';
import './Layout.css';

function Layout({ Subcomponent}) {
  const [activeMenu, setActiveMenu] = useState("speech");

  return (
    <div className="layout-container">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        {Subcomponent}
      </div>
    </div>
  );
}

export default Layout;
