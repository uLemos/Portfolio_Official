import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  padding-inline: 1.25rem;
  align-items: center; 
  padding-top: 1rem;
  max-width: 1280px;
  margin-inline: auto;

  @media (max-width: 1024px){
    flex-direction: column;
  }
`;

export const LineBottom = styled.div`
  width: 2rem;
  height: 0.25rem;
  margin-block: 1rem;
  border-radius: 2rem;
  background-color: #f0ed50;
`;

export const ContainerTitleLine = styled.section`
  display: flex;
  font-weight: 600;
  font-size: 2.5rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;

  @media(width < 1284px){
    padding-bottom: 2rem;
  }
`;