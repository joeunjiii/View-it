// components/Layout.jsx
import React, { useState } from 'react';
import Sidebar from './maincomponent/Sidebar';
import './Layout.css';

function Layout({ Subcomponent}) {
  const [activeMenu, setActiveMenu] = useState("speech");

  return (
    <div className="layout-container">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />


      <main className="content-area">
        {Subcomponent}
      </main>
    </div>
  );
}

export default Layout;
