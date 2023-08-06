import HeaderCSS from "./Header.module.scss";
import closeBtn from "./assets/header/icon-close.svg";
import hamburger from "./assets/header/icon-hamburger.svg";
import logo from "./assets/header/logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

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
        <img className={HeaderCSS.hamburger} src={hamburger} alt="" onClick={openMenu} />
        <div className={menuOpen ? `${HeaderCSS.navigation} ${HeaderCSS.open}` : HeaderCSS.navigation}>
          <div className={HeaderCSS.navigationInner}>
            <ul>
              <li><span>00</span><span onClick={() => redirect("/")} style={{ listStyle: "none", color: "#fff", textDecoration: "none"}}>Home</span></li>
              <li><span>02</span><span onClick={() => redirect("/destination")} style={{ listStyle: "none", color: "#fff", textDecoration: "none"}}>Destination</span></li>
              <li><span>03</span><span onClick={() => redirect("/crew")} style={{ listStyle: "none", color: "#fff", textDecoration: "none"}} >Crew</span></li>
              <li><span>04</span><span onClick={() => redirect("/technology")} style={{ listStyle: "none", color: "#fff", textDecoration: "none"}} >Technology</span></li>
            </ul>
            <img src={closeBtn} alt="" className={HeaderCSS.closeMenuBtn} onClick={openMenu} />
          </div>
        </div>
      </header>
  )
}

export default Header