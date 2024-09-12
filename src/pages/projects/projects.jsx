import React from "react";
import "./projects.css";
import LineDiv from "../../components/lineDiv/lineDiv";
import { Section } from "../../components/UI/style";
import ContainerProject from "../../components/projectsComponent/containerProject";

const Projects  = () => {
  return (
    <>
      <div className="containerProjects">
        <LineDiv />
        <Section>
          <ContainerProject 
            title={'Teste'} 
            subTitle={'Testezin'}
            text={'O elemento HTML <template> é um mecanismo para encapsular um conteúdo do lado do cliente que não é renderizado quando a página é carregada, mas que pode ser instanciado posteriormente em tempo de execução usando JavaScript. Pense no template como um fragmento de conteúdo, que é armazenado para um possível uso futuro no documento'} 
            photoImg={'../../src/assets/pikachu.png'}
            side={2}
          />
          {/* /*Ao lançar novos componentes, o elemento pai não está deixando de forma alinhada*/}
        </Section>
      </div>
    </>
  )
}

export default Projects;