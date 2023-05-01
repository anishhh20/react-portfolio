import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactImg from '../../assests/contact.gif'
import './contact.css'

import { LazyLoadImage } from "react-lazy-load-image-component";

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_64rt45k', 'template_ddlwrsb', form.current, 'UfbjO-2O1Rh6_Ep5Q')
        document.querySelector(".send__button").innerHTML = "Done!"
        setTimeout(function(){
            e.target.reset();
            document.querySelector(".send__button").innerHTML = "Send"
        },2000);
    };
    

  return (
    
    <section className="contact section" id="contact">

        <h2 className="section__title text-center" data-aos="fade-up">Contact Me</h2>

        <span className='section__subtitle text-center' data-aos="fade-up">Get in touch</span>

        <div className='contact__container container grid'>

            <div className='contact__content'>

                <h3 className='contact__title text-center'>Talk to me</h3>
                <div className='contact__info'>

                    <div className=' text-center' data-aos="zoom-in">

                        <LazyLoadImage src={contactImg} className='contactImg'  />

                    </div>

                    <div className='contact__card text-center'  data-aos="zoom-in">
                        <i className='bx bx-mail-send contact__card-icon'></i>
                        <h3 className='contact__card-title'>E-mail</h3>
                        <span className='contact__card-data'>anishteli238@gmail.com</span>

                        <a href="mailto:anishteli238@gmail.com" className='contact__button'>Write me {" "}<i className='bx bx-right-arrow-alt contact__button-icon button__icon' ></i></a>
                    </div>

                    <div className='contact__card text-center' data-aos="zoom-in">
                        <i className='bx bxl-linkedin contact__card-icon'></i>
                        <h3 className='contact__card-title'>LinkedIn</h3>
                        <span className='contact__card-data'>https://www.linkedin.com/in/anishteli238/</span>

                        <a href="https://www.linkedin.com/in/anishteli238/" className='contact__button' target='_blank'>Write me {" "}<i className='bx bx-right-arrow-alt contact__button-icon button__icon' ></i></a>
                    </div>

                </div>

            </div>

            <div className='contact__content'>
                <h3 className='contact__title'></h3>

                <form className='contact__form ' ref={form} onSubmit={sendEmail}>

                    <div className='contact__form-div' data-aos="zoom-in">
                        <label className='contact__form-label'>Name</label>
                        <input type='text' name='name' className='contact__form-input' placeholder='Enter your Name' required />
                    </div>

                    <div className='contact__form-div' data-aos="zoom-in">
                        <label className='contact__form-label'>Mail</label>
                        <input type='email' name='email' className='contact__form-input' placeholder='Enter your Mail' required />
                    </div>

                    <div className='contact__form-div contact__form-textarea' data-aos="zoom-in">
                        <label className='contact__form-label'>Description</label>
                        <textarea name='description' className='contact__form-input' placeholder='Description' cols='30' rows='10'></textarea>
                    </div>

                    <button className='btn button button--flex send__button' >Send{" "}<i className='bx bx-send button__icon' ></i></button>

                </form>

            </div>

        </div>

    </section>

  )
}

export default Contact