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