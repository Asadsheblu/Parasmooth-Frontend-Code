import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaStar, FaUserCircle, FaUserFriends } from 'react-icons/fa';
import Slider from 'react-slick';
import poster from "../../../public/video_poster_image_2.webp"
import Image from 'next/image';

const Review = () => {
    const setting = {
        infinite : true,
        slidesToShow : 1,
        slidesToScroll : 1,
        InitalSlide : 0,
        autoPlay: true,
        dots: true,
       
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
    const [reviews,setReview]=useState([])
    useEffect(()=>{
        fetch("https://parasmooth-backend-code.onrender.com/review")
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div className='container-fluid p-5 about'>
            <div className='row'>

          
            <div className='col-md-6'>
              <Image src={poster} alt='poster' className='img-fluid'/>
            </div>
            <div className='col-md-6 p-5'>
            <Slider {...setting}>
                {
                    
                    reviews.map(review=>(
                      
                 
<>


                      
                      <div className='pt-5'>
        <h3>{review?.category}</h3>
        <FaStar className='text-warning'/>
        <FaStar className='text-warning'/>
        <FaStar className='text-warning'/>
        <FaStar className='text-warning'/>
        <FaStar className='text-warning'/>
        <p className='pt-3'>{review?.review}</p>
        
          
          <div>
          <p className=''> <FaUserCircle className='fs-3 text-success'/> <span className='ps-3'>{review?.name}</span></p>   
          <small className='text-muted'><FaEnvelope className='fs-3 text-success'/><span className='ps-3'>{review?.email}</span></small>
          <hr/>
           </div>             
      
      </div>
      
      </>
   
                       
                    ))
                    
                }
             </Slider>
            </div>
            
        </div>
        </div>
    );
};

export default Review;