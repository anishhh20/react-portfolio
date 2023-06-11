import React from 'react'
import './skills.css'
import Frontend from './frontend'
import Backend from './backend'
import { ReactComponent as Reactjs } from '../../assests/reactjs-icon.svg'
import { ReactComponent as Power } from '../../assests/Power.svg'
import { ReactComponent as Github } from '../../assests/github-icon.svg'
import { ReactComponent as MongoDB } from '../../assests/mongodb.svg'
import { ReactComponent as Git} from '../../assests/git.svg'

const Skills = () => {
  return (
    
    <section className="skills section" id="About - Section">

      <h2 className="section__title text-center" data-aos="fade-up">Skills</h2>

      <span className='section__subtitle text-center' data-aos="fade-up">My Technical Level</span>

      <div className='skills__container container grid'>

        <Frontend />
        <Backend />            

      </div>

      <div className='skills__svg text-center'>
        <div data-aos="zoom-in-up"> <Reactjs /> <span >React-js</span> </div>
        <div data-aos="zoom-in-up"> <MongoDB /> <span >MongoDB</span>  </div>
        <div data-aos="zoom-in-up"> <Power /> <span >Power Apps</span> </div>
        <div data-aos="zoom-in-up"> <Git /> <span >Git</span> </div>
        <div data-aos="zoom-in-up"> <Github /> <span >Github</span> </div>
      </div>

    </section>

  )
}

export default Skills