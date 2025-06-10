import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaFileAlt, FaCog, FaUsers, FaBars } from "react-icons/fa";
import "./css/Sidebar.css";

function Sidebar({ activeMenu, setActiveMenu }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const isTablet = windowWidth <= 1024;
  const sidebarClass = isTablet ? "sidebar tablet" : "sidebar";
  return (
    <>
      

      <div className={sidebarClass}>
        {/* 로고 */}
        <div className="logo-section">
        
         <Link to="/main">
          <img src="/assets/logo.png" alt="로고" className="sidebar-logo" />
          </Link>
        </div>

  
          <div className="profile-section">
            <div className="profile-icon"><span>프로필</span></div>
            <div className="profile-info">
              <div className="username">사용자네네임</div>
              <div className="email">아이디@naver.com</div>
            </div>
          </div>
        

        <nav className="main-nav">
          <ul>
            <MenuItem
              label="메인"
              icon={<FaHome />}
              active={activeMenu === "main"}
              onClick={() => setActiveMenu("main")}
              collapsed={isTablet}
            />
            <MenuItem
              label="모의면접"
              icon={<FaUsers />}
              active={activeMenu === "interview"}
              onClick={() => setActiveMenu("interview")}
              collapsed={isTablet}
            />
            <MenuItem
              label="스피치연습"
              icon={<FaFileAlt />}
              active={activeMenu === "speech"}
              onClick={() => setActiveMenu("speech")}
              collapsed={isTablet}
            />
          </ul>
        </nav>

        <div className="settings-button">
          <FaCog className="settings-icon" />
          {!isTablet && <span>설정</span>}
        </div>
      </div>
    </>
  );
}

function MenuItem({ label, icon, active, onClick, collapsed }) {
  return (
    <li className={active ? "active" : ""} onClick={onClick}>
      <div className="menu-icon">{icon}</div>
      {!collapsed && <span>{label}</span>}
    </li>
  );
}

export default Sidebar;
