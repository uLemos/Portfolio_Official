import React, { useEffect } from "react";
import { LineBottom, ContainerTitleLine } from "./style";
import Aos from "aos";
import "aos/dist/aos.css";

const LineFromTitle = ({title, id}) => {

  useEffect(() => {
    Aos.init({duration: 2500});
  });

  return <>
    <ContainerTitleLine data-aos="zoom-in-up">
      <h1 style={{letterSpacing: '0.25rem'}} id={id}>{title}</h1>
      <LineBottom>
        <div className="LineBottom" />
      </LineBottom>
    </ContainerTitleLine>
  </>
}

export default LineFromTitle;