import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='text-center'>
        <p>© Anish Teli 2023. All Rights Reserved.</p>

        <div className="nav__link">
            <ul className="nav__items">
                <li><a href="#Home - Section">Home</a></li>
                <li><a href="#About - Section">About</a></li>
                <li><a href="#Qualification - Section">Qualification</a></li>
                <li><a href="#Projects - Section">Projects</a></li>
                <li><a href="#Contact - Section">Contact</a></li>
            </ul>
        </div> 
          
          <div className="social">
            <a href='https://www.linkedin.com/in/anishteli238/' className="home__social-icon" target="_blank" >
                <i className="uil uil-linkedin"></i>
            </a>

            <a href='https://github.com/anishhh20' className="home__social-icon" target="_blank" >
                <i className="uil uil-github"></i>
            </a>

            <a href='https://www.instagram.com/anishhh20/' className="home__social-icon" target="_blank" >
                <i className="uil uil-instagram"></i>
            </a>
        </div>
        
    </footer>
  )
}

export default Footer