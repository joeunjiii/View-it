import { FaHome, FaFileAlt, FaCog, FaUsers } from "react-icons/fa";
import './sidebar.css';
function Sidebar({ activeMenu, setActiveMenu }) {
  return (
    <div className="sidebar">
      {/* 로고 영역 */}
      <div className="logo-section">
        <img src="/assets/logo.png" alt="로고" className="sidebar-logo" />
      </div>

      {/* 프로필 */}
      <div className="profile-section">
        <div className="profile-icon">
          <span>프로필</span>
        </div>
        <div className="profile-info">
          <div className="username">사용자네네임</div>
          <div className="email">아이디@naver.com</div>
        </div>
      </div>

      <nav className="main-nav">
        <ul>
          <li
            className={activeMenu === "main" ? "active" : ""}
            onClick={() => setActiveMenu("main")}
          >
            <FaHome className="menu-icon" />
            <span>메인</span>
          </li>
          <li
            className={activeMenu === "interview" ? "active" : ""}
            onClick={() => setActiveMenu("interview")}
          >
            <FaUsers className="menu-icon" />
            <span>모의면접</span>
          </li>
          <li
            className={activeMenu === "speech" ? "active" : ""}
            onClick={() => setActiveMenu("speech")}
          >
            <FaFileAlt className="menu-icon" />
            <span>스피치연습</span>
          </li>
        </ul>
      </nav>

      <div className="settings-button">
        <FaCog className="settings-icon" />
        <span>설정</span>
      </div>
    </div>
  );
}

export default Sidebar;
