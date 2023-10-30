import React from 'react'
import { TbLineDotted } from 'react-icons/tb';
import Nav from '../Components/Nav';
import Options from '../Components/options';
import Footer from '../Components/Footer';
import Order from '../Components/Order';
function Shipping() {
    return (
        <div>
            <Nav></Nav>
            <Options></Options>
            <div className='flex px-32 py-8 items-center relative'>
                <div className='flex items-center gap-1'>
                    <h1 className='rounded-full bg-gray-300 text-white w-5 px-5 py-2 '>1</h1>
                    <span className=' text-2xl text-gray-300'>Address</span>
                    <span className='text-3xl'><TbLineDotted></TbLineDotted></span>
                </div>
                <div className='flex items-center gap-1 text-gray-300'>
                    <h1 className='rounded-full bg-primary text-white w-5 px-5 py-2 '>2</h1>
                    <span className='text-2xl text-primary '>Shipping</span>
                    <span className='text-3xl'><TbLineDotted></TbLineDotted></span>
                </div>
                <div className='flex items-center gap-1 text-gray-300'>
                    <h1 className='rounded-full bg-gray-300 text-white w-5 px-5 py-2 '>3</h1>
                    <span className=' text-2xl'>Payment</span>
                    <span className='text-3xl'><TbLineDotted></TbLineDotted></span>
                </div>
                <div className='flex items-center gap-1'>
                    <h1 className='rounded-full bg-gray-300 text-white w-5 px-5 py-2 '>4</h1>
                    <span className='text-gray-300 text-2xl'>Review</span>

                </div>

            </div>
            <div className='px-20'>
                <h1 className='font-bold text-2xl'>Shipping</h1>
            </div>
            <div className='flex items-center '>
                <label className="flex items-center space-x-2 px-20 py-8">
                    <input
                        type="checkbox"
                        className="text-blue-500 focus:ring-blue-300 h-5 w-5"
                    />

                </label>
                <div>
                    <h1 className='font-bold'>Standard</h1>
                    <h2>Delivery Friday, January 13</h2>

                </div>
                <div className='px-32 '>
                    <h3 className='border-b-2 border-black'>Free</h3>
                </div>




            </div>
            <span className='px-20'>__________________________________________________________________________</span>
            <div className='flex items-center '>
                <label className="flex items-center space-x-2 px-20 py-8">
                    <input
                        type="checkbox"
                        className="text-blue-500 focus:ring-blue-300 h-5 w-5"
                    />

                </label>
                <div>
                    <h1 className='font-bold'>Express</h1>
                    <h2>Delivered Tomarrow</h2>

                </div>
                <div className='px-44 '>
                    <h3 className='border-b-2 border-black'>Free</h3>
                </div>
               



            </div>
            <span className='px-20'>__________________________________________________________________________</span>
           <div className='absolute top-20 right-2 py-10'>
           <Order></Order>
           </div>
           
        
        </div>
    )
}

export default Shipping