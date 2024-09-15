import React from "react";
import { LineBottom, ContainerTitleLine } from "./style";

const LineFromTitle = ({title}) => {
  return <>
    <ContainerTitleLine>
      <h1 style={{letterSpacing: '0.25rem'}}>{title}</h1>
      <LineBottom>
        <div className="LineBottom" />
      </LineBottom>
    </ContainerTitleLine>
  </>
}

export default LineFromTitle;