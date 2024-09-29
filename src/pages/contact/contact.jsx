import React, { useState } from "react";
import "./contact.css";
import LineDiv from "../../components/lineDiv/lineDiv";
import LineFromTitle from "../../components/UI/LineFromTitle";

const Contact = () => {
  const [obj, setObj] = useState({
    nameComplete: "",
    email: "",
    tel: "",
    message: ""
  });
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(obj);
  }

    return (
    <>
      <LineDiv />
      <div className="contact" id="contact">
        <LineFromTitle title={"Contato"}/>
        <form onSubmit={handleSubmit} className="contact__form">

          <div className="contact__infosUser">

            <div className="contact__img">
              <div className="contact__line" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="contact__svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <div className="contact__line" />
            </div>

            <label htmlFor="nameComplete">Nome</label>
            <input 
              type="text"
              value={obj.nameComplete}
              placeholder="Informe seu nome" 
              onChange={ data => setObj({ ...obj, nameComplete: data.target.value })}
            />
            
            <label htmlFor="email">E-mail</label>
            <input 
              type="email"
              value={obj.email}
              placeholder="Informe seu e-mail" 
              onChange={ data => setObj({ ...obj, email: data.target.value }) }
            />

            <label htmlFor="tel">Celular</label>
            <input 
              type="text"
              value={obj.tel}
              placeholder="(00) 00000-0000" 
              onChange={ data => setObj({ ...obj, tel: data.target.value }) }
            />

          </div>

          <div className="contact__message">

            <div className="message">
              <label htmlFor="message">Mensagem</label>
              <textarea 
                type="textarea"
                value={obj.message}
                placeholder="Informe sua mensagem"
                onChange={ data => setObj({ ...obj, message: data.target.value }) }
              />
            </div>

            <div className="contact__btn">
              <button type="submit" className="message__btn">Enviar e-mail</button>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;
