import React from "react";
import "./header.css";

const Header = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if(element)
      element.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      <header className="header" id="hero">
        <span className="header__logo">MyPortifolio</span>
        <nav className="header__nav">
          <ul className="nav__ul">
            <li className="nav__li"><a onClick={() => scrollToSection('hero')}  className="nav__a">Início</a></li>
            <li className="nav__li"><a onClick={() => scrollToSection('about')}  className="nav__a">Sobre</a></li>
            <li className="nav__li"><a onClick={() => scrollToSection('projects')}  className="nav__a">Projetos</a></li>
            <li className="nav__li"><a onClick={() => scrollToSection('#')}  className="nav__a">Contato</a></li>
          </ul>
          <button className="header__icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="header__icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header;