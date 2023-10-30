import React from 'react'
import Nav from '../Components/Nav'
import Options from '../Components/options'
import Footer from '../Components/Footer'
import { TbLineDotted } from 'react-icons/tb'
import Order from '../Components/Order'

function Review() {
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
                    <h1 className='rounded-full bg-gray-300  text-white w-5 px-5 py-2 '>2</h1>
                    <span className='text-2xl text-gray-300 '>Shipping</span>
                    <span className='text-3xl'><TbLineDotted></TbLineDotted></span>
                </div>
                <div className='flex items-center gap-1 text-gray-300'>
                    <h1 className='rounded-full bg-gray-300 text-white w-5 px-5 py-2 '>3</h1>
                    <span className=' text-2xl text-gray-300'>Payment</span>
                    <span className='text-3xl'><TbLineDotted></TbLineDotted></span>
                </div>
                <div className='flex items-center gap-1'>
                    <h1 className='rounded-full bg-primary text-white w-5 px-5 py-2 '>4</h1>
                    <span className='text-primary text-2xl'>Review</span>

                </div>
                </div>
                <div className='px-20'>
                    <h1 className='font-bold'>Payment Information</h1>
                     <span className='text-gray-400'>__________________________________________________________________________</span>
                </div>
                <div className='px-20 flex gap-32'>
                    <div>
                        <h1 className='font-bold'>Shipping address</h1>
                        <p className='w-32 text-gray-400'>Kiran
                       <span className='flex flex-col'>123 Street Avenue
                         City, State, Zip code
                         New York 10001
                         +1 123 456 789</span>  </p>
                         <h2 className='border-b-2 border-black w-6 font-bold'>Edit</h2>
                    </div>
                    <div>
                        <h1 className='font-bold'>Payment Information</h1>
                        <p className='w-32 text-gray-400'>Kiran
                       <span className='flex flex-col'>XXXXXXXXX --- 1234
                              23/09/2023</span>  </p>
                         <h2 className='border-b-2 border-black w-6 font-bold'>Edit</h2>
                    </div>
                </div>
                <div className='px-20'>
                        <h1 className='font-bold'>Standard shipping</h1>
                        <p className='w-32 text-gray-400'>Delivery Friday, October 3 </p>
                         <h2 className='border-b-2 border-black w-6 font-bold'>Edit</h2>
                    </div>
               <div className='absolute top-32 right-2'>
                <Order></Order>
               </div>
            
            </div>
            )
}

            export default Review