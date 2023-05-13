import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

const FolderItem = ({item}) => {
  return (
    
    <div className="folder__card" key={item.id} >

          <LazyLoadImage src={item.image} className="folder__image" data-aos="zoom-in" />

          <h3 className="folder__title" data-aos="zoom-in">{item.title}</h3>
          
          <a href={item.link} className="folder__button" target="_blank" data-aos="zoom-in">
              Demo <i className='bx bx-right-arrow-alt folder__button-icon button__icon' ></i>
          </a>
          
    </div>

  )
}

export default FolderItem