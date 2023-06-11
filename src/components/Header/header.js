import React, { useEffect, useState } from 'react'
import './header.css'

import $, { contains } from 'jquery';


const Header = () => {

  //useState for changing the theme
  const [theme, setTheme] = useState("light-theme");

  //to set the active section in header
  const [activeNav, setActiveNav] = useState("#home")

  //useState for toggle the menu
  const [Toggle, showMenu] = useState(false);

  //toggleTheme function for changing the theme
  const toggleTheme = () => {

    theme === "dark-theme" ? setTheme('light-theme') : setTheme('dark-theme');
  
  }
  
  //to set the Theme to body class in index.html
  useEffect(() => {
    document.body.className = theme ;
  }, [theme]);

  //hide the header when we scroll down and show when scrollup
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {

    //active each section in navbar when we scroll to it and update the page title
    $('section').each(function () {
        if($(this).position().top <= $(document).scrollTop()+10 && ($(this).position().top+10 + $(this).outerHeight()) > $(document).scrollTop()+10) {
            document.title = $(this).attr('id');
            setActiveNav("#"+$(this).attr('id'));
            if($(this).attr('id') === "top"){
              document.title = "Anish Teli | Portfolio"
            }
        }
    });
    
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
      document.getElementById("header").classList.add("show-scroll_header");
    } else {
      document.getElementById("header").style.top = "-83px";
    }
    prevScrollpos = currentScrollPos;

  }

  
  //when header menu is open and we click outside the menu box, then menu box header will close
  document.addEventListener('click', function handleClickOutsideBox(event) {
  
    if (!document.getElementById('box').contains(event.target)) {
      showMenu(false);
    }

    if (document.getElementById('menu').contains(event.target)) {
      showMenu(true);
    }
  });


  return (

    <header className="header" id="header">

      <nav className="nav container navbar" id="navbar" >

        <a href="#" className="nav__logo">Portfo<span className="lio">lio</span></a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"} id="box">
          <ul className='nav__list grid' >

            <li className="nav__item" >
              <a href="#Home - Section" className={activeNav === '#Home - Section' ? "nav__link active-link" : "nav__link"} onClick={() => {setActiveNav('#home'); showMenu(false)}} >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item" >
              <a href="#About - Section" className={activeNav === '#About - Section' ? "nav__link active-link" : "nav__link"} onClick={() => {setActiveNav('#about'); showMenu(false)}}>
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item" >
              <a href="#Qualification - Section" className={activeNav === '#Qualification - Section' ? "nav__link active-link" : "nav__link"} onClick={() => {setActiveNav('#qualification'); showMenu(false)}}>
                <i className="uil uil-briefcase-alt nav__icon"></i>Qualification
              </a>
            </li>

            <li className="nav__item" >
              <a href="#Projects - Section" className={activeNav === '#Projects - Section' ? "nav__link active-link" : "nav__link"} onClick={() => {setActiveNav('#projects'); showMenu(false)}}>
                <i className="uil uil-folder nav__icon"></i>Projects
              </a>
            </li>

            <li className="nav__item" >
              <a href="#Contact - Section" className={activeNav === '#Contact - Section' ? "nav__link active-link" : "nav__link"} onClick={() => {setActiveNav('#contact'); showMenu(false)}}>
                <i className="uil uil-estate nav__icon"></i>Contact
              </a>
            </li>

            <li className="nav__item" id="item">
              <a href="javascript:void(0);" onClick={() => {toggleTheme(); showMenu(false)}} className='nav__link ' id="change_theme">

                {theme === "dark-theme" ? <i className='bx bxs-moon theme' title="Dark Theme"></i> : <i className='bx bx-sun nav__icon theme' title="Light Theme"></i> }

              </a>
            </li>

          </ul>


          {/* toggle close button */}
          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
          
        </div>

        {/* toggle menu button */}
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)} id="menu">
          <i className="uil uil-bars"></i>
        </div>

      </nav>

    </header>

  )
} 
export default Header