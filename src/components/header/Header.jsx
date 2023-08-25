/* eslint-disable react/prop-types */
import HeaderCSS from "./Header.module.scss";
import closeBtn from "./assets/header/icon-close.svg";
import hamburger from "./assets/header/icon-hamburger.svg";
import logo from "./assets/header/logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ pathNote, setPathNote }) => {
  const navigate = useNavigate();

  function desktopRedirect(to, index) {
    navigate(to);
    setPathNote(index);
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(prevVal => !prevVal);
  }

  function redirect(to) {
    navigate(to)
    setMenuOpen(prevVal => !prevVal);
  }

  return (
    <header className={HeaderCSS.header}>
      <img className={HeaderCSS.logo} src={logo} alt="" />
      <div className={HeaderCSS.headerLine}></div>
      <img className={HeaderCSS.hamburger} src={hamburger} alt="" onClick={openMenu} />

      {/* Nav - Links */}
      <div className={HeaderCSS.navlink}>
        <div className={HeaderCSS.blurFilter}></div>
        <ul>
          <li onClick={() => desktopRedirect("/", "0")} className={pathNote == "0" ? `${HeaderCSS.tab} ${HeaderCSS.active}` : HeaderCSS.tab}><span className={HeaderCSS.headerNumber}>00</span><span>Home</span></li>
          <li onClick={() => desktopRedirect("/destination", "1")} className={pathNote == "1" ? `${HeaderCSS.tab} ${HeaderCSS.active}` : HeaderCSS.tab}><span className={HeaderCSS.headerNumber}>01</span><span>Destination</span></li>
          <li onClick={() => desktopRedirect("/crew", "2")} className={pathNote == "2" ? `${HeaderCSS.tab} ${HeaderCSS.active}` : HeaderCSS.tab}><span className={HeaderCSS.headerNumber}>02</span><span>Crew</span></li>
          <li onClick={() => desktopRedirect("/technology", "3")} className={pathNote == "3" ? `${HeaderCSS.tab} ${HeaderCSS.active}` : HeaderCSS.tab}><span className={HeaderCSS.headerNumber}>03</span><span>Technology</span></li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className={menuOpen ? `${HeaderCSS.navigation} ${HeaderCSS.open}` : HeaderCSS.navigation}>
        <div className={HeaderCSS.blurFilter}></div>
        <div>
          <ul>
            <li onClick={() => redirect("/")}><span>00</span><span >Home</span></li>
            <li onClick={() => redirect("/destination")}><span>02</span><span>Destination</span></li>
            <li onClick={() => redirect("/crew")}><span>03</span><span>Crew</span></li>
            <li onClick={() => redirect("/technology")}><span>04</span><span>Technology</span></li>
          </ul>
          <img src={closeBtn} alt="" className={HeaderCSS.closeMenuBtn} onClick={openMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header