import React from 'react'
import './scrollTop.css'

const ScrollTop = () => {

  //hide the scrollTop button when we on #home section
  window.addEventListener("scroll", function () {
      const scrollTop = document.querySelector(".scrolltop");

      if (this.scrollY >= 500){
        scrollTop.classList.add("show-scroll");
      }            
      else {
        scrollTop.classList.remove("show-scroll");
      }

  })

  return (
    
    <a href='#' className="scrolltop">
        <i class="uil uil-arrow-up scrolltop-icon"></i>
    </a>

  )
}

export default ScrollTop