import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleRight, FaArrowDown, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
             <div className='page_banner'>
          <h6 className='text-center'> <Link href="/" className='text-primary fw-bold text-decoration-none'>Home</Link> <FaArrowAltCircleRight className='fs-4'/> About Us</h6>
        </div>
            <div className='container p-5'>
                <h6>CONTACT US</h6>
                <h5 className='fw-bold'>Feel Free Contact Us</h5>
                <div className='row'>
                <div className='col-md-6 bg-light rounded p-5'>
                <form  className='mx-auto'>
  <div class="form-group rounded">
  
    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
 
  </div>
  <div class="form-group pt-2 rounded">

    <input type="text" class="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
 
  </div>
  <div class="form-group pt-2 rounded">
  
    <input type="text" class="form-control" name='category' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Subject"/>
 
  </div>
 
  <div class="form-group pt-2 rounded">

    <textarea class="form-control" placeholder='Enter Message' name='review' id="exampleFormControlTextarea1" rows="3"></textarea>
 
  </div>
  <button type="submit" class="btn btn-primary rounded-pill ps-3 pe-3 mt-2">Send Message <FaArrowDown/> </button>
</form>
                    
                    </div>
                    <div className='col-md-6 p-5'>
                        <h6>Location:</h6>
                        <p className='text-muted'>1989 Timber Ridge Road Sacramento CA, California</p>
                   <hr/>
                        <h6>Phone:</h6>
                        <p className='text-muted'>+88 01609101537</p>
                   <hr/>
                        <h6>Email:</h6>
                        <p className='text-muted'>contact@paraSmooth.com</p>
                   <hr/>
                        <h6>Opening:</h6>
                        <p className='text-muted'>10am - 6pm, Friday Close</p>
                   <hr/>
                   <h6>Follow Us:</h6>
                   <FaFacebook className='rounded-circle fs-4 text-primary shadow'/>
                   <FaLinkedin className='rounded-circle fs-4  ms-2 text-primary shadow'/>
                   <FaYoutube className='rounded-circle fs-4  ms-2 text-danger shadow'/>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;