import React, { useRef, useState } from 'react';
import './contentcontact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const ContentContact = () => {
  const [show, setShow] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7geeg1o', 'template_2cnjlgd', form.current, 'VD7qcqy_j3-qwZsvB')
    e.target.reset()
    setShow(true)
  };
  return (
    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>vizmar.vizcaino@gmail.com</h5>
          <a href="mailto:vizmar.vizcaino@gmail.com" target='_blank'>enviar correo</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5>vizmar vizcaino</h5>
          <a href="https://m.me/vizmar.vizcaino" target='_blank'>enviar mensaje</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
          <h4>WhtasApp</h4>
          <h5>(+57) 317 7047876</h5>
          <a href="https://api.whatsapp.com/send?phone=3177047876" target='_blank'>enviar mensaje</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Your Mesage' required></textarea>
        <button type='submit' className='btn btn-primary' >Enviar Mensaje</button>
        {show ? 'Mensaje enviado con exito!!' : ' '}
      </form>
    </div>
  )
}

export default ContentContact