import React from "react";
import "./contact.css";
import LineDiv from "../../components/lineDiv/lineDiv";
import LineFromTitle from "../../components/UI/LineFromTitle";

const Contact = () => {

  return (
    <>
      <LineDiv />
      <div className="contact" id="contact">
        <LineFromTitle title={"Contato"}/>
        <form action="" className="contact__form">
          <div className="contact__infosUser">
            <div className="contact__img">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="contact__svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <label htmlFor="">Nome</label>
            <input type="text"  placeholder="Informe seu nome" />
            <label htmlFor="" >E-mail</label>
            <input type="email" placeholder="Informe seu e-mail" />
            <label htmlFor="" >Celular</label>
            <input type="tel" placeholder="Informe seu número" />
          </div>
          <div className="contact__message">
            <div className="message">
              <label htmlFor="">Mensagem</label>
              <textarea type="text" placeholder="Informe sua mensagem"/>
            </div>
            <div className="contact__btn">
              <button className="message__btn" onSubmit="">Enviar e-mail</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;
