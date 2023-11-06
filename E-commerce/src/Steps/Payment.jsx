import React from 'react'
import Nav from '../Components/Nav'
import Options from '../Components/options'
import { TbLineDotted } from 'react-icons/tb'
import Orderimg from '../Images/Orderimg.png';
import rating from '../Images/Ratings.png';
import { Link } from 'react-router-dom';


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
            <div className='px-7'>
            <h1 className='font-bold py-2 text-xl'>Payment Information</h1>
                <form className='flex flex-col text-gray-400  '>
                    <label>Card number</label>
                            <input className='w-[700px] border-2 border-gray-400 rounded-md py-2'></input>
                            <label>Card</label>
                            <input className='w-[700px] border-2 border-gray-400 rounded-md py-2'></input>
                        </form>
                        <form className='flex flex-col'>
                        <h1 className='font-bold text-xl'>Billing address</h1>
                        <label>Email Address</label>
                            <input className='w-[700px] border-2 border-gray-400 rounded-md py-2'></input>
                            <div className='flex  '>
                                <div className='flex gap-2 '>
                                    <div>
                                        <div>
                                            <label>First Name</label>
                                        </div>
                                        <div className='  '>

                                            <input className='w-[300px] border-2 border-gray-400 rounded-md py-2'></input>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label className='px-2'>Last Name</label>
                                        </div>

                                        <div className=' px-2'>

                                            <input className='w-[300px] border-2 border-gray-400 rounded-md py-2'></input>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <label>Address</label>
                            <input className='w-[700px] border-2 border-gray-400 rounded-md py-2'></input>
                            <div className='flex  '>
                                <div className='flex gap-2 '>
                                    <div>
                                        <div>
                                            <label>City</label>
                                        </div>
                                        <div className='  '>

                                            <input className='w-[300px] border-2 border-gray-400 rounded-md py-2'></input>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label className='px-2'>State</label>
                                        </div>

                                        <div className=' px-2'>

                                            <input className='w-[300px] border-2 border-gray-400 rounded-md py-2'></input>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            
                            
                            
                            <div className='flex flex-col pb-5 '>
                               

                                <label>Pin code</label>
                                <input className='w-[300px] border-2 border-gray-400 rounded-md py-2'></input>

                                <label>Phone number</label>
                                <input className='w-[300px] border-2 border-gray-400 rounded-md py-2 '></input>
                           </div>

                        </form>
               </div>
               <div className='absolute top-32 right-2'>
               <div className='flex justify-end  px-7 '>
        <div className='w-96  flex flex-col gap-3 font-bold '>
            <div>
                <h1>Order Summary</h1>
                <span>________________________________________________________</span>
                <h2>2 Item </h2>
                <span>________________________________________________________</span>
            </div>
            <div className='flex '>
                <div>
                    <img src={Orderimg}></img>
                </div>

                <div>
                    <h1>orem Ipsum at state star that etc.</h1>
                    <h2>Brand: Aladdin</h2>
                    <img src={rating}></img>
                    <h3 className='font-bold'>$39.99</h3>
                </div>
            </div>
            <div>
                <div className='flex '>
                    <div>
                        <img src={Orderimg}></img>
                    </div>
                    <div>
                        <h1>orem Ipsum at state star that etc.</h1>
                        <h2>Brand: Aladdin</h2>
                        <img src={rating}></img>
                        <h3 className='font-bold'>$39.99</h3>

                    </div>
                </div>
                <span>________________________________________________________</span>
                <div className='flex gap-44 items-center justify-between'>
                    <div>
                        <h1>SUBTOTAL</h1>
                    </div>
                    <div>
                        <h2>$89.99</h2>
                    </div>
                </div>
                <div className='flex gap-44 items-center justify-between'>
                    <div>
                        <h1>Shipping</h1>
                    </div>
                    <div>
                        <h2>$12.87</h2>
                    </div>
                </div>
                <div className='flex gap-44 items-center justify-between pb-3'>
                    <div>
                        <h1>Order total</h1>
                    </div>
                    <div>
                        <h2>$102.86</h2>
                    </div>
                </div>
            </div>
            <button className='bg-primary text-white py-2 rounded-sm '> <Link to='/Review'>Continue</Link></button>
            <div className='flex flex-col pl-52'>
            <h6>RETURN POLICY</h6>
            <h7>HELP</h7>
            </div>
            
        </div>
        </div>
               </div>
                      
        </div>
    )
}

export default Payment