import Link from 'next/link';
import React from 'react';
import {  FaArrowAltCircleRight, FaCodepen, FaDesktop, FaMobile, FaSearch, FaVideo } from 'react-icons/fa';
import Slider from 'react-slick';

const Service = () => {
    const setting = {
        infinite : true,
        slidesToShow : 3,
        slidesToScroll : 2,
        InitalSlide : 0,
        autoPlay: true,
        dots: true,
        arrows: false,
        responsive : [{
            breakpoint : 600,
            settings :{
                slidesToShow: 1,
                slidesToScroll:1,
                autoplay : true,
                infinite :true,
            }
        }],
        responsive : [{
            breakpoint : 1000,
            settings :{
                slidesToShow: 1,
                slidesToScroll:1,
                autoplay : true,
                infinite :true,
            }
        }]
    };

    return (
        <div className='about p-5'>
            <div className='container'>
                <h6 className='text-center'>WHAT WE DO</h6>
                <h3 className='text-center'>Offering Latest Services</h3>
  
             <Slider {...setting}>
      
      <div className='card rounded p-5'>
        <div className='text-center'>
   
        <FaDesktop className='fs-3'/>
        <h5 className='text-center pt-3 pb-2'>Website Development</h5>
        <small>We help generate positive cash flow and use revenue data</small>
        <div className='item_content'>
       
        </div>
        <button  className='btn btn-primary rounded-pill ps-3 pe-3 pt-2 pb-2 mt-3 shadow'>
                        <Link className='text-white' href="/Home/AboutUs">Details <FaArrowAltCircleRight/></Link>
                        </button>
        </div>
      </div>
      <div className='card rounded p-5'>
      <div className='text-center'>
        <FaMobile className='fs-3'/>
       
        <h5 className='text-center pt-3 pb-2'>App Development</h5>
        <small>We help generate positive cash flow and use revenue data</small>
        <div className='item_content'></div>
        <button  className='btn btn-primary rounded-pill ps-3 pe-3 pt-2 pb-2 mt-3 shadow'>
                        <Link className='text-white' href="/Home/AboutUs">Details <FaArrowAltCircleRight/></Link>
                        </button>
        </div>
      </div>
      <div className='card rounded p-5'>
      <div className='text-center'>
      <FaCodepen className='fs-3'/>
       
        <h5 className='text-center pt-3 pb-2'>UX/UI Development</h5>
        <small>We help generate positive cash flow and use revenue data</small>
        <div className='item_content'></div>
        <button  className='btn btn-primary rounded-pill ps-3 pe-3 pt-2 pb-2 mt-3 shadow'>
                        <Link className='text-white' href="/Home/AboutUs">Details <FaArrowAltCircleRight/></Link>
                        </button>
        </div>
      </div>
      <div className='card rounded p-5'>
      <div className='text-center'>
        <FaSearch className='fs-3'/>
       
        <h5 className='text-center pt-3 pb-2'>Digital Marketing</h5>
        <small>We help generate positive cash flow and use revenue data</small>
        <div className='item_content'></div>
        <button  className='btn btn-primary rounded-pill ps-3 pe-3 pt-2 pb-2 mt-3 shadow'>
                        <Link className='text-white' href="/Home/AboutUs">Details <FaArrowAltCircleRight/></Link>
                        </button>
        </div>
      </div>
      <div className='card rounded p-5'>
      <div className='text-center'>
        <FaVideo className='fs-3'/>
       
        <h5 className='text-center pt-3 pb-2'>Video Editing</h5>
        <small>We help generate positive cash flow and use revenue data</small>
        <div className='item_content'></div>
        <button  className='btn btn-primary rounded-pill ps-3 pe-3 pt-2 pb-2 mt-3 shadow'>
                        <Link className='text-white' href="/Home/AboutUs">Details <FaArrowAltCircleRight/></Link>
                        </button>
        </div>
      </div>
     
    
    </Slider>
    </div>   
        </div>
    );
};

export default Service;