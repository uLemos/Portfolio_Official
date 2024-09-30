import React, { useEffect } from "react";
import "./heroComponent.css";
import { Section } from "../UI/style";
import { TypeAnimation } from 'react-type-animation';
import Aos from "aos";
import "aos/dist/aos.css";

const HeroComponent = () => {

  useEffect(() => {
    Aos.init({duration: 2500});
  });

  return (
    <>
      <Section>
      {/* <section className="hero"> */}
        <div className="hero__left">
          <span className="hero__up-text" data-aos="fade-right">Full-Stack Developer</span>
          <h1 className="hero__title" data-aos="fade-right">
            <TypeAnimation
              sequence={[
                'Bem-vindo, meu nome é Fernando',
                2500,
                'Sou Dev Full-Stack',
                2500,
                'Apaixonado por tecnologia',
                2500
              ]}
              wrapper="span"
              speed={15}
              repeat={Infinity}
              >
              {/* Bem-vindo, aqui jás o futuro melhor dev Full-Stack */}
            </TypeAnimation>
          </h1>
          <h2 className="hero__description" data-aos="fade-left">
            Olá, meu nome é Fernando! Sou formado em Análise e Desenvolvimento de Sistemas. Porém, meu contato inicial 
            com a área de TI se iniciou em 2017, quando me encantei com a programação em meu ensino médio, integrado a 
            redes de computadores. Estou sempre a disposição de descobrir e aprender, buscando mais e mais conhecimento.
          </h2>
          <a className="hero__btn" href="https://www.linkedin.com/in/fernandosantos77/" data-aos="zoom-in-up">
            <span></span> 
            <span></span>
            <span></span> 
            <span></span> 
            Fale Comigo
          </a>
        </div>
        <div className="hero__right"> 
          <img src="../../src/assets/pikachu.png" className="hero__img" />
        </div>
      {/* </section> */}
      </Section>
    </>
  )
}

export default HeroComponent;