import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
    <div className="containerAbout">
      <section className="lineDiv">
        <div className="lineDiv__div" />
      </section>
      <h1 className="about__title">Sobre</h1>
      <section className="about">
        <div className="about__leftImages">
          <div className="about__icons">
            <img src="../../src/assets/icons.png" className="img__icon"/>
            <div className="aboutAutoSlide">
              <div className="aboutAutoSlide__items">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yaml/yaml-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg" />
              </div>
            </div>
          </div>
          <div className="about__imgPikachu">
            <img src="../../src/assets/pikachuOlhandoPraCima.png" className="img__Pikachu"/>
          </div>
        </div>
        <div className="about__rightInfo">
          <div className="about__card">
            <div className="cardDecoration" />
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default About;