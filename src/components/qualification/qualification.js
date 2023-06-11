import React, { useState } from 'react'
import './qualification.css'
import Tilt from 'react-parallax-tilt';

const Qualification = () => {

  //useState for toggle the menu between Education and Experience
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    
    <section className="qualification section" id="Qualification - Section">

        <h2 className="section__title text-center" data-aos="fade-up">Qualification</h2>

        <span className="section__subtitle text-center" data-aos="fade-up">My Journey</span>

        <div className="qualification__container container">

            <div className="qualification__tabs">

                <div className={toggleState === 1 ? "btn qualification__button    qualification__active" : "btn qualification__button   "} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className={toggleState === 2 ? "btn qualification__button    qualification__active" : "btn qualification__button   "} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>

            </div>

            <div className="qualification__sections">

                <Tilt perspective={5000} scale={1} gyroscope={true} transitionSpeed={7000}>

                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}> 

                        <div className="qualification__data" data-aos="fade-up-right">
                            <div data-aos="fade-up-right">
                                <h3 className="qualification__title">Bachelor of Engineering</h3> 
                                <span className="qualification__subtitle">SPPU - Pune</span>
                                <p style={{fontSize:"0.8rem", marginBottom:"0.5rem"}}>Information Technology</p> 
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data' data-aos="fade-up-left">
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div data-aos="fade-up-left">
                                <h3 className='qualification__title'>Diploma</h3>
                                <span className='qualification__subtitle'>MSBTE - Baramati</span>
                                <p style={{fontSize:"0.8rem", marginBottom:"0.5rem"}}>Information Technology</p> 
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> 2018 - 2021
                                </div>
                            </div>

                        </div>

                        <div className='qualification__data' data-aos="fade-up-right">
                            <div data-aos="fade-up-right">
                                <h3 className='qualification__title'>SSC</h3>
                                <span className='qualification__subtitle'>Kolhapur Board - Phaltan</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> - 2018
                                </div>
                            </div> 
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                        </div>

                    </div>
                </Tilt>

                <Tilt perspective={5000} scale={1} gyroscope={true} transitionSpeed={7000}>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data" data-aos="fade-up-right">
                            <div>
                                <h3 className="qualification__title">Sunbridge Software Services</h3> 
                                <span className="qualification__subtitle">Internship</span>
                                <p style={{fontSize:"0.8rem", marginBottom:"0.5rem"}}>Power App's Developer</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>  Apr 2023 - June 2023
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className="qualification__data" data-aos="fade-up-left">
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">The Sparks Foundation</h3> 
                                <span className="qualification__subtitle">Internship</span>
                                <p style={{fontSize:"0.8rem", marginBottom:"0.5rem"}}>Web Developer</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>  Mar 2023 - Apr 2023
                                </div>
                            </div>
                            

                        </div>

                        <div className="qualification__data" data-aos="fade-up-right">
                            
                            <div>
                                <h3 className="qualification__title">Oasis Infobyte</h3> 
                                <span className="qualification__subtitle">Internship</span>
                                <p style={{fontSize:"0.8rem", marginBottom:"0.5rem"}}>Web Developer</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>  Feb 2023 - Mar 2023
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div></div>

                        </div>

                    </div>
                </Tilt>
                
            </div>

        </div>

    </section>

  )
}

export default Qualification