"use client"
import React, { useEffect, useState } from 'react'
import AppWrap from '@/wrapper/AppWrap'
import MotionWrap from '@/wrapper/MotionWrap'

import images from '@/constants/constants';
import emailjs from '@emailjs/browser';

//styles
import './Footer.scss'
import Image from 'next/image';
import { IContactFormData, } from '@/app/interfaces';


const Footer: React.FC = () => {
  const [formData, setFormData] = useState<IContactFormData>({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)
  const [loading, setloading] = useState<boolean>(false)

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_MAILJS_PUBLICID || ''); 
  }, []);

  const { name, email, message } = formData

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setloading(true)

    const serviceId = process.env.NEXT_PUBLIC_MAILJS_SERVICE ; 
    const templateId =  process.env.NEXT_PUBLIC_MAILJS_TEMPLATE; 
  
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }; 
    
    try {
      await emailjs.send(serviceId || '', templateId || '', templateParams);
      setIsFormSubmitted(true);
    } catch (error) {
      console.error('Error al enviar el email:', error);
      alert('Hubo un problema al enviar el mensaje. Inténtalo más tarde.');
    } finally {
      setloading(false);
    }
    
  }
  return (

    <>
      <h2 className='head-text'>Gracias por ver mi portfolio, me podes contactar acá</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <Image
            src={images.email}
            alt='Email'
            width={100}
            height={100}
            className='app__footer-card-img'
          />
          <a href="mailto:lautaro.ondarza@gmail.com" className='p-text'>lautaro.ondarza@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <Image
            src={images.whatsapp}
            alt='Tel'
            width={100}
            height={100}
            className='app__footer-card-img'
          />
          <a
            href="https://wa.me/5491122427074?text=Hola%20Lautaro,%20vi%20tu%20portfolio%20y%20me%20interesa%20contactarte"
            target="_blank"
            rel="noopener noreferrer"
            className='p-text'
          >
            +54 (11) 2242 7074
          </a>
        </div>
      </div>

      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input type="text" className='p-text' placeholder='Tu Nombre / Your Name' value={name} onChange={handleChangeInput} name='name' />
          </div>
          <div className='app__flex'>
            <input type="email" className='p-text' placeholder='Tu Mail / Your Email' value={email} onChange={handleChangeInput} name='email' />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Tu Mensaje / Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput} />

          </div>
          <button
            type='button'
            className='p-text'
            onClick={handleSubmit}>
            {loading ? 'Enviando/Sending' : "Enviar / Send"}
          </button>
        </div>
        :
        <div>
          <h3 className='head-text'>
            Gracias por contactarme! / Thanks for getting in touch
          </h3>
        </div>
      }

    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'Contact', 'app__whitebg');
