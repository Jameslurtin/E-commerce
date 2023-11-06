import React from 'react'
import Options from '../Components/options';
import Nav from '../Components/Nav';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Completed() {
  return (
    <div >
        <Nav></Nav>
        <Options></Options>
        <div className='flex flex-col justify-center items-center py-40 gap-3 font-dm '>
            <h1 className='text-9xl text-[#0B8BA6]'><BsFillCheckCircleFill></BsFillCheckCircleFill></h1>
            <div>
            <h1 className='text-[#0B8BA6]'>Your order was successful </h1>
            </div>
            <h2 className='font-bold text-4xl '>Thanks for your purchase!</h2>
            <h3>Your order number is #11234556423146230</h3>
            <h4>You’ll receive an email confirming your order details</h4>
            <button className='bg-[#0B8BA6] px-32 rounded-md text-white'>Track Your Order</button>
            <Link to = '/Home' target='_parent'><h5>Back to Home</h5></Link>
        </div>
       
    </div>
  )
}

export default Completed;