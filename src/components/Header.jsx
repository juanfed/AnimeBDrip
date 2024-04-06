import React, { useState } from "react";
import { Link } from "react-router-dom"; // hace la funcion de un <a></a> de html

import hamburger from "./../assets/menuHamburguer.svg"; // importo el svg del menu de navegacion

import "../styles/header.css";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [userLogin, setUserLogin] = useState(false);
  return (
    <header>
      <nav className="nav">
        <div className="nav__container">
          <h1 className="nav__logo">
            <Link to="/animeBDRip" id="tittle">
              AnimeBDRip
            </Link>
          </h1>

					{/* Aca irá el icono para desplegar el menu en dispositivos moviles */}
					<label htmlFor="menu" className="nav__label">
						<img src={hamburger} alt="menu" className="nav__img" />
					</label>
					<input type="checkbox" id="menu" className="nav__input" />

          <div className="nav__menu">
            <Link to="/animeBDRip">Inicio</Link>
            <Link to="listAnime">Lista Animes</Link>
            <Link to="#">Manga</Link>
            <Link to="listFilms">Peliculas</Link>
            <Link to="#">Contacto</Link>

            {userLogin ? null : (
              <>
                <Link to="#">Ingresar</Link>
                <Link to="#">Registrase</Link>
              </>
            )}
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
