import React from 'react'
import { TbLineDotted } from 'react-icons/tb';
import Nav from '../Components/Nav';
import Options from '../Components/options';
import Orderimg from '../Images/Orderimg.png';
import rating from '../Images/Ratings.png';
import { Link } from 'react-router-dom';

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
            <button className='bg-primary text-white py-2 rounded-sm '> <Link to='/Payment'>Continue</Link></button>
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

export default Shipping