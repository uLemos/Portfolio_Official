import React from "react";
import "./projects.css";
import { Section } from "../../components/UI/style";
import LineDiv from "../../components/lineDiv/lineDiv";
import ContainerProject from "../../components/projectsComponent/containerProject";
import LineFromTitle from "../../components/UI/LineFromTitle";

const Projects  = () => {
  return (
    <>
      <div className="containerProjects">
        <LineDiv />
        <LineFromTitle title={'Projetos'} />
        <Section>
          <ContainerProject 
            title={'QUIZ'} 
            text={'Este projeto de quiz é organizado em três categorias principais: Front-End, Back-End e Full Stack, cada uma com três níveis de dificuldade (Iniciante, Intermediário e Avançado). O objetivo é proporcionar uma experiência de aprendizado divertida e desafiadora para desenvolvedores, ajudando-os a aprimorar suas habilidades técnicas.'} 
            photoImg={'../../src/assets/quiz.png'}
            side={2}
            listTech={['ReactJs', 'Java', 'Vite', 'Postgress']}
          />
        </Section>
        <Section>
          <ContainerProject 
            title={'CRUD'} 
            text={'Desenvolvi um projeto de CRUD utilizando Angular com TypeScript no front-end e ASP.NET Core com .NET 6 no back-end. O projeto inclui componentes modulares, serviços para comunicação com a API RESTful e integração com Bootstrap para um design responsivo. No back-end, utilizei Entity Framework Core para gerenciamento de dados e implementei CORS para comunicação segura entre front-end e back-end.'} 
            photoImg={'../../src/assets/crud.png'}
            side={1}
            listTech={['Angular', 'C#', '.Net', 'ORM Ef Core', 'SQLite']}
          />
        </Section>
        <Section>
          <ContainerProject 
            title={'To Do List'} 
            text={'O elemento HTML <template> é um mecanismo para encapsular um conteúdo do lado do cliente que não é renderizado quando a página é carregada, mas que pode ser instanciado posteriormente em tempo de execução usando JavaScript. Pense no template como um fragmento de conteúdo, que é armazenado para um possível uso futuro no documento'} 
            photoImg={'../../src/assets/todolist.png'}
            side={2}
            listTech={['ReactJs', 'Vite']}
          />
        </Section>
        <Section>
          <ContainerProject 
            title={'eCommerce API'} 
            text={'Desenvolvi uma API de e-commerce com C# e .NET 6, utilizando Entity Framework Core 6 e PostgreSQL. A API realiza operações de CRUD para produtos, categorias e pedidos, com autenticação via cookies e tokens JWT. Implementa padrões RESTful e CORS para comunicação segura entre front-end e back-end. Este projeto destaca minha habilidade em criar soluções escaláveis e seguras para e-commerce.'} 
            photoImg={'../../src/assets/ecommerce.png'}
            side={1}
            listTech={['C#', '.NET6', 'EF CORE 6', 'Postgress']}
          />
        </Section>
      </div>
    </>
  )
}

export default Projects;