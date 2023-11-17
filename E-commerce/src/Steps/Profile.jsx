import React from 'react'
import Nav from '../Components/Nav'
import Options from '../Components/options'
import Profileimg from '../Images/Profileimg.png'


import { GiWantedReward} from 'react-icons/gi';
import { AiOutlineWallet } from 'react-icons/ai';
import { MdOutlineLocalShipping, MdPayments } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { LuSettings } from 'react-icons/lu';
import { FiHelpCircle } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';


function Profile() {
    return (
        <div >
            <Nav></Nav>
            <Options></Options>
            <div className='flex px-20 py-5 '>
                <div className='  border-2 border-black w-80 ' >
                    <div className='h-[400px] bg-[#0B8BA6] text-white '  >
                        <div className='flex flex-col items-center justify-center py-3 font-dm '>
                            <img className='rounded-full' src={Profileimg}></img>
                            <h1 className='py-2 text-white font-bold'>Kiran</h1>
                            <div className='flex border-2 border-white px-3 py-4'>
                                <div >
                                    <h1>Balance</h1>
                                </div>
                                <div>
                                    <h1>$45,00</h1>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='flex flex-col  pt-5  font-dm font-bold'>
                    <Link to ='/Signin'target='_parent'>
                        <h5 className='flex items-center gap-2 px-10  hover:bg-[#0B8BA6] hover:text-white'><span> <GoSignOut></GoSignOut></span>Sign Out</h5> 
                        </Link>
                    </div> 
                   
                </div>
                <form className='px-20 '>
                    <h1 className='text-[#0B8BA6] font-dm font-bold text-2xl pb-20'>Personal Information</h1>
                    <div className='flex gap-3'>
                        <div className="mb-4 ">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full  rounded-md border-2 border-gray-300"
                                required
                            />
                        </div>

                        <div className="mb-4 ">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className='flex gap-3'>

                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="dob" className="block text-sm font-medium text-gray-600">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
                            Gender
                        </label>
                        <select
                            className="mt-1 p-2 w-full  border-2 border-gray-300 rounded-md "
                            required
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <div className='text-[#737373] py-4' >
                            <h1 >In order to access some features of the Service, you will have fill out </h1>
                            <span>your account  details</span>
                        </div>
                        
                    </div>
                    <div className='flex gap-5' >
                            <button className='border-[#0B8BA6] border-2 px-7 py-2 hover:bg-[#0B8BA6] hover:text-white'>Cancel</button>
                            <button className=' border-[#0B8BA6] border-2 px-7 py-2 hover:bg-[#0B8BA6] hover:text-white'>Save</button>
                        </div>

                </form>
            </div> 



        </div >
    )
}

export default Profile