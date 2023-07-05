import React from 'react';
import about from "../../public/about_image_5.webp"
import Image from 'next/image'

import ProgressBar from "@ramonak/react-progress-bar";
import Link from 'next/link';
import AboutUs from './AboutUs';

const About = () => {

    return (
        <div className='container-fluid about'>
    
            <div className='row container p-5'>
                <div className='col-md-6'>
                <Image src={about} className='img-fluid about-img' alt='about-img'/>
                </div>
                <div className='col-md-6 pt-5 ps-3' >
                    <div className='pt-5'>
                    <span className='rounded-pill bg-dark text-white ps-3 pe-3 pt-2 pb-2'>About Us</span>
                    <h1 className='fw-bold pt-4 pb-3'>Welcome To Paradox For Business Consulting</h1>
                  <div className='pt-3'>
                  <span className='pt-3'>Investment Planning</span>
                    <span className='rounded-pill shadow bg-light'>
                    <ProgressBar  completed={84}  />
                    </span>
                  </div>
                    <div className='pt-3'>
                    <span className='pt-3'>Online Consulting</span>
                    <span className='rounded-pill shadow bg-light'>
                    <ProgressBar  completed={93}  />
                    </span>
                    </div>
                   
                    </div>
                    
                    <button  className='btn btn-primary rounded-pill ps-3 pe-3 pt-2 pb-2 mt-5'>
                        <Link className='text-white' href="/Home/AboutUs">Know More</Link>
                        </button>
                </div>

            </div>
        </div>
    );
};

export default About;