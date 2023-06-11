import React, {useState} from 'react'
import { images } from './photo_data'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Masonry, {ResponsiveMasonry}  from "react-responsive-masonry"
import Tilt from 'react-parallax-tilt';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Info = () => {

  const [ref, inView] = useInView({
        threshold: 0.2,
    })

  const [toggleState,setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  
  document.addEventListener('click', function handleClickOutsideBox(event) {
    
    if (document.getElementById('about__box').contains(event.target)) {
      document.body.style.overflow = "hidden";
    }
    
    if (document.getElementById('about__close').contains(event.target)) {
      document.body.style.overflow = "visible";
    }

  });


  return (

    <>

      <div className="about__info grid" ref={ref}>

          <Tilt perspective={2000} scale={1} gyroscope={true} transitionSpeed={2000}>
            <div className="about__box" data-aos="zoom-in">
                <i className='bx bx-award about__icon' ></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">{inView  ? <CountUp start={0} end= {1} duration={5} /> : null} year</span>
            </div>
          </Tilt>

          <Tilt perspective={2000} scale={1} gyroscope={true} transitionSpeed={2000}>
            <div className="about__box" data-aos="zoom-in">
                <i className='bx bxs-briefcase about__icon' ></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle ">{inView  ? <CountUp start={0} end= {10} duration={5} /> : null} + projects</span>
            </div>
          </Tilt>

          <Tilt perspective={2000} scale={1} gyroscope={true} transitionSpeed={2000}>
            <a href='javascript:void(0);' onClick={() => toggleTab(1)} id="about__box">
              <div className="about__box" data-aos="zoom-in">
                    <i className='bx bxs-camera about__icon'></i>
                    <h3 className="about__title">Photograph's</h3>
                    <span className="about__subtitle about__link">View{" "}<i class='bx bx-images button__icon'></i> </span>
              </div>
            </a>
          </Tilt>

      </div>

      <div className={toggleState === 1 ? 'photographer active_photographer-box' : 'photographer'} id="photographer">

        <div className='photographer__box' id="photographer__box">

          <h2 className="section__title text-center">Photograph's</h2>
          <span className='section__subtitle text-center'>Clicked By me</span>

          <i className="uil uil-times photographer__box-close button__icon" onClick={() => toggleTab(0)} id="about__close"></i>

          <a href="#about__close">
            <i className="uil uil-angle-up photographer__box-top button__icon "></i>
          </a>

          <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
            <Masonry className='image_grid' gutter="0px">
              {images.map(({ src, title }) => (
                <div className='text-center' >
                  <LazyLoadImage src={src} loading="lazy" effect="blur"/>
                  <span style={{fontSize:"0.8rem", color: "var(--text)"}}>{title}</span>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>

        </div>
      </div>
    </>

  )
}

export default Info