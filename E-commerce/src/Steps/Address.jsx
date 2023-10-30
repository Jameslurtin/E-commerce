import React from 'react'
import Options from '../Components/options'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Order from '../Components/Order'
import { TbLineDotted } from 'react-icons/tb';

function Address() {
    return (
        <div>
            <Nav></Nav>
            <Options></Options>
            <div className='relative'>
                <div>
                    <div className='flex px-32 py-8 items-center'>
                        <div className='flex items-center gap-1'>
                            <h1 className='rounded-full bg-primary text-white w-5 px-5 py-2 '>1</h1>
                            <span className='text-primary text-2xl'>Address</span>
                            <span className='text-3xl'><TbLineDotted></TbLineDotted></span>
                        </div>
                        <div className='flex items-center gap-1 text-gray-300'>
                            <h1 className='rounded-full bg-gray-300 text-white w-5 px-5 py-2 '>2</h1>
                            <span className='text-2xl '>Shipping</span>
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
                    <div className='px-20 '>
                        <h1 className='text-2xl font-bold'>Address</h1>
                        <form className='flex flex-col pb-20'>
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
                </div>

            </div>

            <div className='flex flex-col absolute top-32 right-1  '>
                <Order></Order>
            </div>

        </div>
    )
}

export default Address