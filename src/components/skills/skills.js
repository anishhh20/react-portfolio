import React from 'react'
import './skills.css'
import Frontend from './frontend'
import Backend from './backend'

const Skills = () => {
  return (
    
    <section className="skills section" id="About - Section">

      <h2 className="section__title text-center" data-aos="fade-up">Skills</h2>

      <span className='section__subtitle text-center' data-aos="fade-up">My Technical Level</span>

      <div className='skills__container container grid'>

        <Frontend />
        <Backend />            

      </div>

    </section>

  )
}

export default Skills