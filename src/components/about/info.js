import React, {useState} from 'react'
import { images } from './photo_data'
import { Gallery } from "react-grid-gallery";

const Info = () => {

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

      <div className="about__info grid">

          <div className="about__box" data-aos="zoom-in">
              <i className='bx bx-award about__icon' ></i>
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle"></span>
          </div>

          <div className="about__box" data-aos="zoom-in">
              <i className='bx bxs-briefcase about__icon' ></i>
              <h3 className="about__title">Completed</h3>
              <span className="about__subtitle ">10 + projects</span>
          </div>

          <a href='javascript:void(0);' onClick={() => toggleTab(1)} id="about__box">
            <div className="about__box" data-aos="zoom-in">
                  <i className='bx bxs-camera about__icon'></i>
                  <h3 className="about__title">Photographer</h3>
                  <span className="about__subtitle about__link">View{" "}<i class='bx bx-images button__icon'></i> </span>
            </div>
          </a>

      </div>

      <div className={toggleState === 1 ? 'photographer active_photographer-box' : 'photographer'} id="photographer">

        <div className='photographer__box' id="photographer__box">

          <h2 className="section__title text-center">Photograph's</h2>
          <span className='section__subtitle text-center'>Clicked By me</span>

          <i className="uil uil-times photographer__box-close button__icon" onClick={() => toggleTab(0)} id="about__close"></i>

          <a href="#about__close">
            <i className="uil uil-angle-up photographer__box-top button__icon "></i>
          </a>

          <Gallery images={images} enableImageSelection= {false} rowHeight={480} margin={30} /> 
        </div>

          
  
      </div>

    </>

  )
}

export default Info