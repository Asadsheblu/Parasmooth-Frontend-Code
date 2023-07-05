import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import aboutimg from "../../public/about_image_1.webp"
import { FaArrowAltCircleRight, FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div>

  
        <div className='page_banner'>
          <h6 className='text-center'> <Link href="/" className='text-primary fw-bold text-decoration-none'>Home</Link> <FaArrowAltCircleRight className='fs-4'/> About Us</h6>
        </div>
        
        <div className='row container p-5'>
                <div className='col-md-6'>
                <Image src={aboutimg} className='img-fluid about-img' alt='about-img'/>
                </div>
                <div className='col-md-6 pt-5 ps-3' >
                   <p>ABOUT US</p>
                   <h1>Best For Your Start-Up Creative Agency</h1>
                   <p>Our action plan is focused and planned. We are result oriented organization and are committed to invest in initiatives for newer expanded customer relationship. We always strive to enhance productivity and improve</p>
                    <p className='pt-3'>A software development company that provides solutions for maximizing profits and converting clients ideas into reality.</p>
                   <hr/>
                   <div className='row fw-bold'>
                        <div className='col-md-6 pt-2'>
                            <FaCheckCircle className='fs-5 text-warning'/>
                            <span className='fs-6 ps-2'>Comprehensive Analysis</span>

                        </div>
                        <div className='col-md-6 pt-2'>
                            <FaCheckCircle className='fs-5 text-warning'/>
                            <span className='fs-6 ps-2'>Well Designed Web App</span>

                        </div>
                        <div className='col-md-6 pt-2'>
                            <FaCheckCircle className='fs-5 text-warning'/>
                            <span className='fs-6 ps-2'>Mobile Friendly Web app</span>

                        </div>
                        <div className='col-md-6 pt-2'>
                            <FaCheckCircle className='fs-5 text-warning'/>
                            <span className='fs-6 ps-2'>High Performance & Speed</span>

                        </div>
                       

                    </div>
                    <button  className='btn btn-primary rounded-pill ps-3 pe-3 pt-2 pb-2 mt-5 shadow'>
                        <Link className='text-decoration-none text-white' href="/Home/AboutUs">Know More <FaArrowAltCircleRight/> </Link>
                        </button>
                </div>
                    
            </div>
            {/* <div className='row container p-5'>
                <div className='col-md-4 card'>
                    <div className='p-5 text-center'>
                       <span className='fs-1'>
                       <CountUp
                        end={100}
                        duration={5}
                        />
                       </span>
                            
                    </div>

                </div>
                <div className='col-md-4 card'>
                    <div className='p-5 text-center'>
                       <span className='fs-1'>
                       <CountUp
                        end={100}
                        duration={5}
                        />
                       </span>
                            
                    </div>

                </div>
                <div className='col-md-4 card'>
                    <div className='p-5 text-center'>
                       
                            
                    </div>

                </div>

            </div> */}
            <div className='container'>

     
            <div class="row row-cols-1 row-cols-md-3 g-4 p-5">
  <div class="col">
    <div class="card h-100 rounded text-center pt-3 pb-3">
    {/* <span className='fs-1'>
                       <CountUp
                        end={100}
                        duration={5}
                        />
                       </span> */}
    </div>
  </div>
  <div class="col">
    <div class="card h-100 rounded">
    {/* <span className='fs-1 text-center pt-3 pb-3'>
                       <CountUp
                        end={100}
                        duration={5}
                        />
                       </span> */}
    </div>
  </div>
  <div class="col">
    <div class="card h-100 rounded text-center pt-3 pb-3">
    {/* <span className='fs-1'>
                       <CountUp
                        end={100}
                        duration={5}
                        />
                       </span> */}
    </div>
  </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;