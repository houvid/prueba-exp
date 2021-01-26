import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import SearchResults from "./pages/SearchResults/";
import Home from "./pages/Home/";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Car } from "./assets/icon-cart.svg";
import { ReactComponent as User } from "./assets/user.svg";
import { Link, Route, useLocation } from "wouter";

function App() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation(); // eslint-disable-next-line

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <div className="App">
      <div className="topnav">
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <div className="inputSearch">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              valor={keyword}
              placeholder="Buscar aquí producto"
            ></input>
          </form>
        </div>
        <div className="car-ontainer">
          <Car className="car" />
        </div>
        <div className="sesion">
          <User className="user" />
          <label className="text-sesion">Iniciar sesión</label>
        </div>
      </div>
      <Header />

      <section className="App-content">
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/" component={Home} />
      </section>
    </div>
  );
}

export default App;
