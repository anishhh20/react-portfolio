import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Frontend = () => {
  return (
    
    <div className='skills__content' data-aos="flip-left">

        <h3 className="skills__title">Frontend Developer</h3>

        <div className='skills__box'>
        
            <div className='skills__group'>

                <div className='skills__data'>

                    <CircularProgressbar value="90" className='circle-progress' />

                    <div>
                        <h3 className='skills__name'>HTML</h3>
                        <span className='skills__level'></span>
                    </div>

                </div>

                <div className='skills__data'>

                    <CircularProgressbar value="85" className='circle-progress' />


                    <div>
                        <h3 className='skills__name'>CSS</h3>
                        <span className='skills__level'></span>
                    </div>

                </div>
                
                <div className='skills__data'>

                    <CircularProgressbar value="65" className='circle-progress' />

                    <div>
                        <h3 className='skills__name'>Bootstrap</h3>
                        <span className='skills__level'></span>
                    </div>

                </div>

                <div className='skills__data'>

                    <CircularProgressbar value="65" className='circle-progress' />


                    <div>
                        <h3 className='skills__name'>JavaScript</h3>
                        <span className='skills__level'></span>
                    </div>

                </div>

                <div className='skills__data'>

                    <CircularProgressbar value="45" className='circle-progress' />

                    <div>
                        <h3 className='skills__name'>React</h3>
                        <span className='skills__level'></span>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Frontend