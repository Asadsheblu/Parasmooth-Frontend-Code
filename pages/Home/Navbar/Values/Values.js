import React from 'react';
import values from "../../../../public/about_image_9.webp"
import graph from "../../../../public/about_image_10.webp"
import Image from 'next/image';
import { FaArrowAltCircleRight, FaHandshake, FaUserCircle } from "react-icons/fa";
import Link from 'next/link';

const Values = () => {
    return (
        <div className='container'> 
           <div className='row  p-5'>
                
                <div className='col-md-6 pt-5 ps-3' >
                    <div className='pt-5'>
                    <span className='rounded-pill bg-dark text-white ps-3 pe-3 pt-2 pb-2'>Our Values</span>
                    <h1 className='fw-bold pt-4 pb-3'>Clear Thinking Makes A Bright Future</h1>
                  
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                           <FaUserCircle className='fs-1 text-primary'/>
                           <h6 className='fw-bold pt-2 pb-2'>User Friendly</h6>
                           <p className='text-muted'>Focused and planned. We are result oriented organize and are committee to invest</p>
                        </div>
                        <div className='col-md-6'>
                        <FaHandshake className='fs-1 text-white bg-primary rounded-circle'/>
                        <h6 className='fw-bold pt-2 pb-2'>Best Support</h6>
                           <p className='text-muted'>Focused and planned. We are result oriented organize and are committee to invest</p>
                           <button  className='btn btn-primary rounded-pill ps-3 pe-3 pt-2 pb-2 mt-5 shadow'>
                        <Link className='text-decoration-none text-white' href="/Home/AboutUs">Know More <FaArrowAltCircleRight/> </Link>
                        </button>
                        </div>
                    </div>
                    
                   
                </div>
                <div className='col-md-6 pt-3'>
                <Image src={values} className='img-fluid about-img' alt='about-img'/>
                <Image src={graph} className='w-50 h-25 graph' alt='about-img'/>
               
                </div>

            </div>
        </div>
    );
};

export default Values;