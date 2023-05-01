import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Backend = () => {
  return (
    
    <div className='skills__content' data-aos="flip-right">

        <h3 className="skills__title">Backend Developer</h3>

        <div className='skills__box'>
        
            <div className='skills__group'>

                <div className='skills__data'>

                    <CircularProgressbar value="70" className='circle-progress' />

                    <div>
                        <h3 className='skills__name'>MySQL</h3>
                        <span className='skills__level'></span>
                    </div>

                </div>

                <div className='skills__data'>

                    <CircularProgressbar value="50" className='circle-progress' />

                    <div>
                        <h3 className='skills__name'>Firebase</h3>
                        <span className='skills__level'></span>
                    </div>

                </div>
                
                <div className='skills__data'>

                    <CircularProgressbar value="40" className='circle-progress' />

                    <div>
                        <h3 className='skills__name'>Node JS</h3>
                        <span className='skills__level'></span>
                    </div>

                </div>

                <div className='skills__data'>

                    <CircularProgressbar value="60" className='circle-progress' />

                    <div>
                        <h3 className='skills__name'>Python</h3>
                        <span className='skills__level'></span>
                    </div>

                </div>

            </div>
        </div>

    </div>

  )
}

export default Backend;