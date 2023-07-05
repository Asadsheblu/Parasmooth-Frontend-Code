import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaGlobe, FaHome, FaMendeley, FaPencilAlt, FaPersonBooth, FaPrescription, FaUser } from 'react-icons/fa';
import ReactLanguageSelect from 'react-languages-select';

//import css module
import 'react-languages-select/css/react-languages-select.css';




const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light banner shadow sticky-nav ">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="">ParaSmooth</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
        <li class="nav-item">
        <Link className="nav-link active" aria-current="page" href="/"><FaHome className='text-primary'/> Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><FaPersonBooth className='text-primary'/> Services</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/Home/AboutUs"><FaUser className='text-primary'/> About</Link>
        </li>
        <li class="nav-item">
          <Link href="/Home/Review/Reviewadd"  class="nav-link" ><FaPencilAlt className='text-primary'/>  Add review</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Home/Contact/Contact"><FaEnvelope className='text-primary'/> Contact</a>
        </li>
       
      
      </ul>
      <FaGlobe className='text-primary'/>
    <ReactLanguageSelect
    languages={["en", "fr", "de", "it", "es"]} />



    <button className='btn btn-dark rounded-pill'>Get a Quotes</button>
    </div>
    
  </div>
</nav>
    );
};

export default Navbar;