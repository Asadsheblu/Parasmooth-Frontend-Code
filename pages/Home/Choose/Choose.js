import React from 'react';
import { FaSalesforce, FaSlack } from 'react-icons/fa';

const Choose = () => {
    return (
        <div className='container pt-5 pb-5'>
           <div className='text-center fw-bold'> 
           <h6>WHY CHOSE US</h6>
            <h1>We Are Moving To A Higher & Better Stage.</h1>
           </div>
           <div className='row'>
            <div className='col-md-3 pt-3'>
                <div className='c-card'>
                    <FaSlack className='text-primary bg-white rounded-circle fs-1 p-2'/>
                    <h6 className='pt-2'>Fast Development</h6>
                    <small className='text-muted'>We can launch a small site less then a week. So you can drop a Order</small>
                </div>
            </div>
            <div className='col-md-3 pt-3'>
                <div className='c-card'>
                <FaSlack className='text-primary bg-white rounded-circle fs-1 p-2'/>
                    <h6 className='pt-2'>Full Flexibility</h6>
                    <small className='text-muted'>Multiple development tools help us create. So you can drop a Order.</small>
                </div>
            </div>
            <div className='col-md-3 pt-3'>
                <div className='c-card'>
                <FaSlack className='text-primary bg-white rounded-circle fs-1 p-2'/>
                    <h6 className='pt-2'>Modern Design</h6>
                    <small className='text-muted'>Most modern  to any design. So you can drop a Order.</small>
                </div>
            </div>
            <div className='col-md-3 pt-3'>
                <div className='c-card'>
                <FaSlack className='text-primary bg-white rounded-circle fs-1 p-2'/>
                    <h6 className='pt-2'>Simple Maintenance</h6>
                    <small className='text-muted'>Multiple development tools help us create. So you can drop a Order.</small>
                </div>
            </div>

           </div>
            
        </div>
    );
};

export default Choose;