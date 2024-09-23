import React from "react";
import "./header.css";
import { useState, useEffect } from "react";

const Header = () => {

  const [isSticky, setIsSticky] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive)
  }

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({behavior: 'smooth'});
      setActive(!isActive);
    }
  };

  return (
    <>
      <header className="header" id="hero" >
        <nav className={`header__nav ${isSticky ? 'sticky' : ''} ${isActive ? 'active' : ''}`}>
          { !isSticky && (
            <span className="header__logo">Santos</span>  
          )}
          { isSticky && (
            <span className="header__logo"><img src="../../src/assets/letraS.png" className="header__img"/></span>  
          )}
          <ul className="nav__ul">
            <li className="nav__li"><a onClick={() => scrollToSection('hero')}  className="nav__a">Início</a></li>
            <li className="nav__li"><a onClick={() => scrollToSection('about')}  className="nav__a">Sobre</a></li>
            <li className="nav__li"><a onClick={() => scrollToSection('projects')}  className="nav__a">Projetos</a></li>
            <li className="nav__li"><a onClick={() => scrollToSection('contact')}  className="nav__a">Contato</a></li>
          </ul>
          <button className={`header__hamburguer ${isActive ? 'active' : ''}`} onClick={handleClick}></button>
        </nav>
      </header>
    </>
  )
}

export default Header;