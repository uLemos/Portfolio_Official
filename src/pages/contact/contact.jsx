import React, { useState, useRef, useEffect } from "react";
import "./contact.css";
import LineDiv from "../../components/lineDiv/lineDiv";
import LineFromTitle from "../../components/UI/LineFromTitle";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import InputMask from "react-input-mask";
import { Toaster, toast } from 'sonner';
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {

  useEffect(() => {
    Aos.init({duration: 2500});
  })
  
  const form = useRef();
  const [toastNotify, setToastNotify] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  let message = toastNotify ? "✔ E-mail senviado com sucesso!" : "😱 Falha no envio do e-mail!";

  const sendEmail = (event) => {
    console.log(event);

    emailjs.sendForm("service_3ofwvpr", "template_54fxqcv", form.current, { publicKey: "RKbggV4DfDgDsJdgw" })
    .then((response) => {
        console.log(`Enviado! O response é: ${response.text} - ${response.status}`)
        form.current.reset();
        setToastNotify(true);
      },
      (err) => {
        console.log(`Erro! O response é: ${err.text}`)
        setToastNotify(false);
      },
    );
  };

    return (
    <>
      <LineDiv />
      <div className="contact" id="contact">
        <LineFromTitle title={"Contato"}/>
        <form ref={form} onSubmit={handleSubmit(sendEmail)} className="contact__form">

          <div className="contact__infosUser" data-aos="zoom-in-right" >

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
              id="nameComplete"
              {...register("nameComplete", { required: {
                    value: true,
                    message: "Informe um nome."
                  }
                })
              }
              placeholder="Informe seu nome" 
            />
            <p className="error__message">{errors.nameComplete?.message}</p>
            
            <label htmlFor="email">E-mail</label>
            <input 
              type="email"
              id="email"
              {...register("email", { required: {
                    value: true,
                    message: "Informe um email."
                  }
                })
              }
              placeholder="Informe seu e-mail" 
            />
            <p className="error__message">{errors.email?.message}</p>

            <label htmlFor="tel">Celular</label>
            <InputMask  
              mask="(99) 99999-9999"
              type="text"
              id="tel"
              {...register("tel", { required: {
                    value: true,
                    message: "Informe um telefone."
                  }
                })
              }
              placeholder="(00) 00000-0000" 
            >
              {(inputProps) => <input {...inputProps} />}
            </InputMask>
            <p className="error__message">{errors.tel?.message}</p>
          </div>

          <div className="contact__message">

            <div className="message">
              <label htmlFor="message">Mensagem</label>
              <textarea 
                type="textarea"
                id="message"
                {...register("message", { required: {
                      value: true,
                      message: "Informe uma mensagem."
                    }
                  })
                }
                placeholder="Informe sua mensagem"
              />
              <p className="error__message">{errors.message?.message}</p>
            </div>

            <div className="contact__btn">
              <button type="submit" className="message__btn" onClick={() => 
                {toastNotify ? 
                  toast.success(message, { duration: 2500, style: { background: "green", border: "none", color: "white" } }) : 
                    toast.error(message, { duration: 2500, style: { background: "red", border: "none", color: "white" } })}}
              > Enviar e-mail</button>
            </div>
            <Toaster position="bottom-left" expand={false} />
          </div>
        </form>
        
      </div>
    </>
  )
}

export default Contact;
