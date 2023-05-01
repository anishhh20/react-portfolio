import React from 'react'
import './project.css'
import Folderss from './folderss'

const Project = () => {
  return (
    
    <section className="projects section" id="projects">

      <h2 className="section__title text-center" data-aos="fade-up">Project's</h2>

      <span className='section__subtitle text-center' data-aos="fade-up">Most Recent Work</span>

      <div className='projects__container container '>

          <Folderss />  

      </div>

    </section>

  )
}

export default Project