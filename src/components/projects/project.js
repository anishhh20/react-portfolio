import React from 'react'
import {projectData} from './data'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Tilt from 'react-parallax-tilt';
import "./project.css"

const Project = () => {
  return (
    <section className="projects section" id="Projects - Section">

      <h2 className="section__title text-center" data-aos="fade-up">Project's</h2>

      <span className='section__subtitle text-center' data-aos="fade-up">Most Recent Work</span>

      <div className='projects__container container '>

        <div className="project__card">
            {projectData.map((item) =>{
                return (

                    <div className="project__details" key={item.id}>

                        <div className="grid">
                            <Tilt perspective={50000} scale={1} gyroscope={true} transitionSpeed={5000}>       
                                <LazyLoadImage src={item.image} className="project__image" data-aos="zoom-in" />
                            </Tilt>
                        </div>

                        <div className="grid">
                            <h3 className="project__title" data-aos="zoom-in">{item.title}</h3>

                            <p className="project__description">{item.description}</p>

                            <span className="project__tech">{item.tech}</span>

                            <span className="project__links">
                                <a href={item.demo} className="project__button" target="_blank" data-aos="zoom-in">
                                    Demo <i class='bx bx-link-external button__icon'></i>
                                </a>

                                <a href={item.github} className="project__button" target="_blank" data-aos="zoom-in">
                                    Github <i class='bx bxl-github button__icon' ></i>
                                </a>
                            </span>

                            
                        </div>

                    </div>

                )
            })}
        </div>

      </div>

    </section>
  )
}

export default Project