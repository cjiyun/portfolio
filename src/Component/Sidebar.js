import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./CSS/Sidebar.css"; // CSS 스타일 연결

const Sidebar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 상태
  const [userName, setUserName] = useState('Guest');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserName = localStorage.getItem('userName');
    if (isLoggedIn && storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState); // 사이드바 열기/닫기 토글
  };

  const [openSubMenu, setOpenSubMenu] = useState(null); // 현재 열려 있는 메뉴 상태

  const toggleMenu = (menu) => {
    setOpenSubMenu((prevMenu) => (prevMenu === menu ? null : menu)); // 같은 메뉴 클릭 시 닫기
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    setUserName('Guest');
    navigate('/portfolio');
  };
  
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css";
    document.head.appendChild(link);
  }, []);

  return (
    <div className={isSidebarOpen ? "sidebar" : "sidebar close"}>
      <div class="logo-details">
        <a href="/portfolio">
          <AiFillHome className="home-icon" size={30} color="#fff"/>
        </a>
        <span class="logo_name">HOME</span>
      </div>
      <ul className="nav-links">
        <li>
          <div className="icon-link">
            <NavLink to="/skill" className="link">
              <i className="bx bx-collection"></i>
              <span className="link_name">SKILLS</span>
            </NavLink>
          </div>
        </li>
        <li className={openSubMenu === "projects" ? "showMenu" : ""}>
          <div className="icon-link" onClick={() => toggleMenu("projects")}>
            <NavLink to="#" className="link">
              <i className="bx bx-collection"></i>
              <span className="link_name">PROJECTS</span>
            </NavLink>
            <i className="bx bxs-chevron-down arrow"></i>
          </div>
          <ul className="sub-menu-box">
            <li>
              <NavLink className="sub-menu" to="/project/project1">포트폴리오 제작</NavLink>
            </li>
            <li>
              <NavLink className="sub-menu" to="/project/project2">Project 2</NavLink>
            </li>
          </ul>
        </li>
        <li className={openSubMenu === "contests" ? "showMenu" : ""}>
          <div className="icon-link" onClick={() => toggleMenu("contests")}>
            <NavLink to="#" className="link">
              <i className="bx bx-collection"></i>
              <span className="link_name">CONTESTS</span>
            </NavLink>
            <i className="bx bxs-chevron-down arrow"></i>
          </div>
          <ul className="sub-menu-box">
            <li>
              <NavLink className="sub-menu" to="/contest/contest1">Contest 1</NavLink>
            </li>
          </ul>
        </li>
        <li className={openSubMenu === "careers" ? "showMenu" : ""}>
          <div className="icon-link" onClick={() => toggleMenu("careers")}>
            <NavLink to="#" className="link">
              <i className="bx bx-collection"></i>
              <span className="link_name">CAREER</span>
            </NavLink>
            <i className="bx bxs-chevron-down arrow"></i>
          </div>
          <ul className="sub-menu-box">
            <li>
              <NavLink className="sub-menu" to="/career/career1">Experience</NavLink>
            </li>
            <li>
              <NavLink className="sub-menu" to="/career/career2">Education</NavLink>
            </li>
            <li>
              <NavLink className="sub-menu" to="/career/career3">Certificate</NavLink>
            </li>
          </ul>
        </li>
        <section className="home-section" style={{ marginLeft: isSidebarOpen ? "250px" : "80px" }}>
          <div className="home-content">
            <i className="bx bx-menu" onClick={toggleSidebar}></i>
            <span className="text"></span>
          </div>
        </section>
        <li>
          <div className="profile-details">
            <div className="profile-content">
            <img src={process.env.PUBLIC_URL + "/image/guest.jpg"} alt="profile" />
            </div>
            <div className="name-job">
              <div className="profile_name">{userName}</div>
            </div>
            {userName === 'Guest' ? (
              <NavLink to="/auth/login">
                <i className="bx bx-log-in"></i>
              </NavLink>
            ) : (
              <i className="bx bx-log-out" onClick={handleLogout}></i>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;