import React from 'react';
import bimg from "../../public/hero_banner_image_5.webp"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Who from './Who';
const Banner = () => {
    return (
        <>
       
        <div className='container-fluid banner'>
          <div className='row'>
            <div className='col-md-6 p-5'>
              <div className='pt-5'>
              <span className='rounded-pill bg-light p-2'>Start Consulting <span className='rounded-pill bg-warning ps-2 pe-2'>Here</span></span>
              </div>
              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Clear Thinking Makes a Bright Future',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3em', display: 'inline-block' }}
      repeat={Infinity}
    />
           <h1 className='fw-bold p-3'></h1>
           <button className='rounded-pill btn btn-primary mt-4 ps-3 pe-3 pt-2 pb-2 text-white fw-bold shadow'>Start Cooperation</button>
            </div>
            <div className='col-md-6'>
                <Image src={bimg} className='img-fluid' alt='banner-img'/>
            </div>
            </div>
        </div>
        <Who/>
        </>
    );
};

export default Banner;