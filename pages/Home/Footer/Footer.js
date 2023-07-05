import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleRight, FaArrowCircleUp, FaArrowDown, FaLocationArrow, FaSearchLocation } from 'react-icons/fa';
import cta from "../../../public/cta_image_5.webp"
import Image from 'next/image';
const Footer = () => {
    return (
        <div className='about p-5 bg-dark text-white'>
            <div className='container bg-primary'>
                <div className='row p-5'>
                    <div className='col-md-6 p-5'>
                    <h2 className='text-white'>Let’s Create Something Amazing Together.</h2>
                    <button  className='btn btn-warning rounded-pill ps-3 pe-3 pt-2 pb-2 mt-5'>
                        <Link className='text-black' href="/Home/AboutUs">Know More <FaArrowDown/></Link>
                        </button>
                    </div>
                    <div className='col-md-6 pt-3 ps-5 pe-5'>
                    <Image src={cta} className='img-fluid w-75'/>
                    </div>

                </div>

            </div>
            <div className='container p-5'>
                <div className='row'>
                <div className='col-md-3'>
                    <h3 className='text-center pt-4'>ParaSmooth</h3>
                </div>
                <div className='col-md-3'>
                    <h5>Contact Us</h5>
                    <small className='text-muted'>If you want to Get a New Idea:</small>
                    <h6>contact@paraSmooth.com</h6>
                </div>
                <div className='col-md-3'>
                <h5>Find Us</h5>
                <FaSearchLocation className='fs-5 text-warning'/>
                <p>1989 Timber Ridge RoadSacramento CA, California</p>
                </div>
                <div className='col-md-3'>
                    <h5>Newsletter</h5>
                    <input type='search' className='rounded-pill shadow p-2' placeholder='Enter Email'/>
                   <Link href="/"> <FaArrowAltCircleRight style={{marginLeft:-40}} className='text-warning fs-2'/></Link>
                </div>
                </div>
            </div>
           
            <hr/>
                <h6 className='text-center'>Copyright &#169; 2023 All Right Reserved Asad Sheblu</h6>
        </div>
    );
};

export default Footer;