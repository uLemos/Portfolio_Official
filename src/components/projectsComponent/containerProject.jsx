import React from "react";
import "./containerProject.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ViewProject = ({url}) => {
  return <a href={url} className="apresentation__view">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="apresentation__svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </a>;
}

const SideApresentation = ({title, text, listTech = [], url, sideFade}) => {
  return <div className="container__apresentation" data-aos={sideFade}>
            <div className="apresentation__title" >
              <h1 className="title__h1">{title}</h1>
              <ViewProject  url={url}/>
            </div>
            <h2 className="apresentation__description">{text}</h2>
            <ul className="apresentation__ul">
              {listTech.map((item, index) => (
                <li key={index} className="apresentation__li">{item}</li>
              ))}
            </ul>
          </div>
}

const SideImg = ({photoImg}) => {
  return <div className="container__photo">
            <img src={photoImg} className="photo__img" />
            {/* <a href="#">TESTE</a> */}
          </div>
}

const getRandomColor = () => {
  // const letters = '0123456789ABCDEF';
  // let color = '#';

  // for (let i = 0; i < 6; i++){
  //   color += letters[Math.floor(Math.random() * 16)];
  // }
  return /*color*/ '#f0ed50';
}

const ContainerProject = ({title, text, photoImg, side, listTech = [], url}) => {

  useEffect(() => {
    document.documentElement.style.setProperty('--random-color', getRandomColor());
    Aos.init({duration: 2500});
  }, []);

  return (
    <>
      <div className="containerSides">
        {side == 1 
          ? <SideApresentation 
          title={title}
          text={text}
          listTech={listTech}
          url={url}
          sideFade={"fade-right"}
          /> 
          : <SideImg photoImg={photoImg}/>
        }
        {side == 2 
          ? <SideApresentation 
          title={title}
          text={text}
          listTech={listTech}
          url={url}
          sideFade={"fade-left"}
          /> 
          : <SideImg photoImg={photoImg}/>
        }
      </div>
    </>
  )
}

export default ContainerProject;