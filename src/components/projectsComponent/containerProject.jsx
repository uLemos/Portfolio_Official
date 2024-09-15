import React from "react";
import "./containerProject.css";
import { useEffect } from "react";

const SideApresentation = ({title, text, listTech = []}) => {
  return <div className="container__apresentation">
            <div className="apresentation__title">
              <h1 className="title__h1">{title}</h1>
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
          </div>
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const ContainerProject = ({title, text, photoImg, side, listTech = []}) => {

  useEffect(() => {
    document.documentElement.style.setProperty('--random-color', getRandomColor());
  }, []);

  return (
    <>
      <div className="containerSides">
        {side == 1 
          ? <SideApresentation 
          title={title}
          text={text}
          listTech={listTech}
          /> 
          : <SideImg photoImg={photoImg}/>
        }
        {side == 2 
          ? <SideApresentation 
          title={title}
          text={text}
          listTech={listTech}
          /> 
          : <SideImg photoImg={photoImg}/>
        }
      </div>
    </>
  )
}

export default ContainerProject;