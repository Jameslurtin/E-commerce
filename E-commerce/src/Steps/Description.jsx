import React from 'react';
import Options from '../Components/options';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import part from '../Images/Part.png';
import part2 from '../Images/part2.png';
import part3 from '../Images/part3.png';
import part4 from '../Images/part4.png';
import Main from '../Images/Mainimg.png';
import rating from '../Images/Ratings.png';
import { HiLocationMarker } from 'react-icons/hi';
import { BsShieldCheck } from 'react-icons/bs';
import { MdLocalShipping } from 'react-icons/md';
import Product1 from '../Images/product image1.png';
import BarChart from '../Components/BarChart';
import pro1 from '../Images/proreview.png';
import pro2 from '../Images/proreview1.png';
import pro3 from '../Images/proreview2.png';
import { Link } from 'react-router-dom';


const reviews = [
    {
        userName: 'John Doe',
        profileImage: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
        rating: 4,
        comment: 'Great product! Works as expected.',
    },
    {
        userName: 'Jane Smith',
        profileImage: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        rating: 5,
        comment: 'Excellent quality and fast delivery.',
    },

];

function Description() {
    const percentage = 90;
    const percentage1 = 85;
    const percentage2 = 70;
    const percentage3 = 60;
    const percentage4 = 40;


    return (
        <div>
            <Nav />
            <Options />
            <div className='flex px-20 items-center gap-2 py-4'>
                <div>
                    <img src={part} alt='Part' />
                    <img src={part2} alt='Part2' />
                    <img src={part3} alt='Part3' />
                    <img src={part4} alt='Part4' />
                </div>
                <div className='flex h-[350px]'>
                    <img src={Main} alt='Main' />
                </div>
                <div className='py-20 font-dm'>
                    <h1 className='font-bold'>
                        Curology the sunscreen by curology is a non-clog, grease-free (SPF 30 lotion).
                    </h1>
                    <h2 className='font-semibold'>
                        Brand: <span className='text-primary'>Curology</span>
                    </h2>
                    <img src={rating} alt='Rating' />
                    <h3 className='border-b-2 border-gray-400 pb-7'>$39.99 - $30.65</h3>
                    <div className='flex gap-3 pt-7'>
                        <img src={part} alt='Part' />
                        <div>
                            <h1>Curology +2</h1>
                            <h2 className='font-semibold'>$34.99</h2>
                        </div>
                        <img src={part2} alt='Part2' />
                        <div>
                            <h1>Curology +2</h1>
                            <h2 className='font-semibold'>$34.99</h2>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <img src={part3} alt='Part3' />
                        <div>
                            <h1>Curology +2</h1>
                            <h2 className='font-semibold'>$34.99</h2>
                        </div>
                        <img src={part4} alt='Part4' />
                        <div>
                            <h1>Curology +2</h1>
                            <h2 className='font-semibold'>$34.99</h2>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col font-dm gap-2 border-2 border-blue-300 h-[515px] w-80'>
                    <h1 className='font-bold px-8'>
                        FREE delivery Sunday, February5 on $25 of items shipped by Aladdin
                    </h1>
                    <h2 className='pt-3 font-bold px-8'>
                        Or fastest delivery Wednesday, February 1 order within{' '}
                        <span className='text-blue-400'>20 hrs 41 mins</span>
                    </h2>
                    <h3 className='pt-4 flex items-center gap-1 px-5 text-primary'>
                        <span className='text-2xl text-primary'>
                            <HiLocationMarker />
                        </span>
                        Deliver to New York 10001
                    </h3>
                    <h4 className='text-[#117700] font-semibold px-5'>In Stock.</h4>
                    <div className='flex px-5'>
                        <button className='bg-primary text-white px-3 rounded-sm'>Qty: 1</button>
                    </div>
                    <div className='flex flex-col px-5 gap-5'>
                   
                        <button className='bg-primary text-white py-3  rounded-sm'> <Link to='/Address'target='_parent'>Contact supplier</Link></button>
                        
                        <button className='text-primary border-2 border-primary py-3 rounded-sm'>Chat now</button>
                    </div>
                    <h5 className='font-bold text-xl px-5'>Purchase details</h5>
                    <div className='flex flex-col px-5 text-primary'>
                        <h6 className='flex items-center gap-1'>
                            <span>
                                <MdLocalShipping />
                            </span>
                            Shipping
                        </h6>
                        <h7 className='flex items-center gap-1'>
                            <span>
                                <BsShieldCheck />
                            </span>
                            Payments
                        </h7>
                    </div>
                </div>
            </div>
            <span className='text-gray-400 flex items-center justify-center'>
                ____________________________________________________________________________________________________________________________________________________________________________________________
            </span>
            <div className=' w-96  '>
                <h1 className='text-primary font-bold font-dm'>Customer reviews</h1>
                <img src={rating} alt='Rating' />
            </div>
            <div className='flex'>
                <h2 >4.5 out of 5</h2>
            </div>
            <h1>299,976 global ratings</h1>
            <div className="my-4">
                <div className='flex items-center px-5'>
                    <h1>5star</h1>
                    <BarChart percentage={percentage} />
                </div>
                <div className='flex items-center px-5'>
                    <h1>4star</h1>
                    <BarChart percentage={percentage1} />
                </div>
                <div className='flex items-center px-5'>
                    <h1>3star</h1>
                    <BarChart percentage={percentage2} />
                </div>
                <div className='flex items-center px-5'>
                    <h1>2star</h1>
                    <BarChart percentage={percentage3} />
                </div>

                <div className='flex items-center px-5'>
                    <h1>1star</h1>
                    <BarChart percentage={percentage} />
                </div>



            </div>
            <div className='flex justify-center items-center text-primary font-bold text-2xl'>
                <h1>Reviews with images</h1>

            </div>
            <div className='flex justify-center gap-2'> 
            <img src={pro1}></img>
            <img src={pro2}></img>
            <img src={pro3}></img>

            </div>
           
            <div className='flex flex-col gap-14 justify-center items-center'>
                {reviews.map((review, index) => (
                    <div className='py-5 w-80' key={index}>
                        <div className='flex items-center gap-2'>
                            <img src={review.profileImage} alt='Profile' className='w-8 h-8 rounded-full' />
                            <span className='font-semibold'>{review.userName}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src={rating} alt='Rating' />
                            <span>{review.rating}</span>
                        </div>
                        <h1>{review.comment}</h1>
                        <h2>By {review.user}</h2>
                        <h3 className='pb-5'>19 people found this helpful</h3>
                        <button className='bg-primary px-5 text-white py-2 rounded-sm '>Helpfull</button>
                    </div>
                ))}
            </div>
            <span className='text-gray-400 flex items-center justify-center'>
                ____________________________________________________________________________________________________________________________________________________________________________________________
            </span>
            <Footer />
        </div>
    );
}

export default Description;
