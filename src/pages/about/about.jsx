import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="lineDiv">
        <div className="lineDiv__div" />
      </section>
      <section className="about">
        <div className="about__leftImages">
          <div className="about__icons">
            <img src="../../src/assets/icons.png" className="img__icon"/>
            <span className="about__iconsDesc">Tecnologias e Frameworks</span>
          </div>
          <div className="about__imgPikachu">
            <img src="../../src/assets/pikachuOlhandoPraCima.png" className="img__Pikachu"/>
          </div>
        </div>
        <div className="about__rightInfo">
          <div className="cardDecoration" />
        </div>
      </section>
    </>
  )
}

export default About;