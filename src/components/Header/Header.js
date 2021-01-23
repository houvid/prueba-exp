import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link, useLocation } from "wouter";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation(); // e
  const handleSubmit = (evt) => {
    evt.preventDefault();
    closeMobileMenu();
    
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

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
          
          <div className="inputSearch-mobile">
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                type="text"
                valor={keyword}
                placeholder="Buscar aquí producto"
              ></input>
            </form>
          </div>
        
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/search/Hombre">Hombre</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/search/Mujer">Mujer</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/search/Junior">Junior</Link>
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
};;

export default Header;
