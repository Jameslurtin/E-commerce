import React from 'react'
import Nav from '../Components/Nav'

function Contactus() {
  return (
    <div>
        <Nav></Nav>
        <h1 className='font-bold text-2xl flex items-center justify-center pt-5 pb-7 font-dm'>Contactus</h1>
        <div className='flex flex-col justify-center items-center  gap-7 font-dm'>
            <input  className='border-2 border-gray-400 px-20 ' placeholder='Enter Your Name'></input>
            <input  className='border-2 border-gray-400 px-20 'placeholder='Enter Your Email'></input>
            <input  className='border-2 border-gray-400 px-20 'placeholder='Enter Your Mobile Number'></input>
            <button className='bg-green-500 px-5 py-2 text-white rounded-md '>Submit</button>
        </div> 
        </div>
  )
}

export default Contactus