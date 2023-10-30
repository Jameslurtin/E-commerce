import React from 'react'
import Nav from '../Components/Nav'
import Options from '../Components/options'
import Footer from '../Components/Footer'
import { TbLineDotted } from 'react-icons/tb'
import Order from '../Components/Order'

function Payment() {
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
                    <h1 className='rounded-full bg-primary text-white w-5 px-5 py-2 '>3</h1>
                    <span className=' text-2xl text-primary'>Payment</span>
                    <span className='text-3xl'><TbLineDotted></TbLineDotted></span>
                </div>
                <div className='flex items-center gap-1'>
                    <h1 className='rounded-full bg-gray-300 text-white w-5 px-5 py-2 '>4</h1>
                    <span className='text-gray-300 text-2xl'>Review</span>

                </div>


               
            </div>
            <div >
            <h1 className='font-bold py-2'>Payment Information</h1>
                <form className='flex flex-col text-gray-400 '>
                    <label>Card number</label>
                            <input className='w-[700px] border-2 border-gray-400 rounded-md py-2'></input>
                            <label>Card</label>
                            <input className='w-[700px] border-2 border-gray-400 rounded-md py-2'></input>
                        </form>
                        <form className='flex flex-col'>
                        <h1 className='font-bold'>Billing address</h1>
                        <label>Email Address</label>
                            <input className='w-[700px] border-2 border-gray-400 rounded-md py-2'></input>
                            <div className='flex '>
                                <div className='flex flex-col'>
                                    <label>First Name</label>
                                    <input className='w-[300px] border-2 border-gray-400 rounded-md py-2'></input>
                                    <label>Last Name</label>
                                    <input className='w-[300px] border-2 border-gray-400 rounded-md py-2'></input>

                                </div>

                            </div>
                            <label>Address</label>
                            <input className='w-[700px] border-2 border-gray-400 rounded-md py-2'></input>
                            <div className='flex flex-col '>
                                <label>City</label>
                                <input className='w-[300px] border-2 border-gray-400 rounded-md py-2'></input>

                                <label>State</label>
                                <input className='w-[300px] border-2 border-gray-400 rounded-md py-2'></input>

                                <label>Pin code</label>
                                <input className='w-[300px] border-2 border-gray-400 rounded-md py-2'></input>

                                <label>Phone number</label>
                                <input className='w-[300px] border-2 border-gray-400 rounded-md py-2 '></input>
                           </div>

                        </form>
               </div>
               <div className='absolute top-32 right-2'>
               <Order></Order>
               </div>
                      
        </div>
    )
}

export default Payment