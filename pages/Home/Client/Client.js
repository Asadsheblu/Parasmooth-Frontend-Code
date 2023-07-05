import React from 'react';
import client1 from "../../../public/client_logo_1.webp"
// import client3from "../../../public/client_logo_2.webp"
import client3 from "../../../public/client_logo_3.webp"
import client4 from "../../../public/client_logo_4.webp"
import client5 from "../../../public/client_logo_5.webp"
import Image from 'next/image';
const Client = () => {
    return (
        <div className='container p-5'>
              <span className='rounded-pill bg-dark text-white ps-3 pe-3 pt-2 pb-2'>Our Partners</span>
           <div className='rounded'>
           <div className='row  p-4'>
                <div className='col-md-3 text-center pt-3'>
                    <Image src={client1} className='img-fluid'/>
                </div>
               
                
                <div className='col-md-3 text-center pt-3'>
                    <Image src={client3} className='img-fluid'/>
                </div>
                {/* <div className='col-md-3text-center pt-3'>
                    <Image src={client2} className='img-fluid'/>
                </div> */}
                <div className='col-md-3 text-center pt-3'>
                    <Image src={client4} className='img-fluid'/>
                </div>
                <div className='col-md-3 text-center pt-3'>
                    <Image src={client5} className='img-fluid'/>
                </div>
                
              
            </div>
           </div>
            
        </div>
    );
};

export default Client;