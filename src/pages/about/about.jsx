import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
    <div className="containerAbout">
      <section className="lineDiv">
        <div className="lineDiv__div" />
      </section>
      <section className="about">
        <div className="about__leftImages">
          <div className="about__icons">
            
            <div className="about__card">
              <div className="cardDecoration" />
              <img src="../../src/assets/perfilF.png" className="card__photo" />
              <div className="card__titles">
                <h1 className="card__titlePhoto">Fernando Santos</h1>
                <span className="card__subTitlePhoto">Full-Stack Developer</span>
              </div>
            </div>

            {/* <img src="../../src/assets/icons.png" className="img__icon"/> */}
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
         <span className="aboutRight__subTitle">Soft/Hard - Skills</span>
         <h1 className="aboutRight__title">Conceitos</h1>
         <ul className="aboutRight__ul">
          <li className="ul__li">
            <a href="" className="li__a">Arquitetura Limpa</a>
          </li>
          <li className="ul__li">
            <a href="" className="li__a">DDD e TDD</a>
          </li>
          <li className="ul__li">
            <a href="" className="li__a">RESTFul API`s</a>
          </li>
          <li className="ul__li">
            <a href="" className="li__a">Mensageria RabbitMq/Kafka</a>
          </li>
          <li className="ul__li">
            <a href="" className="li__a">Docker</a>
          </li>
          <li className="ul__li">
            <a href="" className="li__a">CI/CD</a>
          </li>
         </ul>
        </div> 
      </section>
    </div>
    </>
  )
}

export default About;