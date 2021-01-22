import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link} from "wouter";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
      <div className="logo-nav">
        <div className="logo-nav-mobile">
          <Link to="/">
            <Logo className="logo" />
          </Link>
          
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/search/Hombre">Hombre</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/search/Mujer">Mujer</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/search/Junior">Junio</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/search/Niños">Niños</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/search/Accesorios">Accesorios</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/search/Ofertas">Ofertas</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
