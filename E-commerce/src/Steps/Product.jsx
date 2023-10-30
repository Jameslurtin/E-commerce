import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Options from '../Components/options';
import category from '../Images/category.png';
import product from '../Images/product image.png';
import product1 from '../Images/product image1.png';
import product2 from '../Images/product image2.png';
import product3 from '../Images/product image3.png';
import rating from '../Images/Ratings.png';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';



function Product() {
    return (
        <div className="flex flex-col min-h-screen w-screen">
            <Nav />
            <Options />
            <div className='font-dm flex flex-col justify-center items-center text-white bg-[#0B8BA6] py-10 gap-3'>
                <h1 className='text-4xl font-bold'>Aladdin Best sells</h1>
                <h2 className='text-sm'>Our most popular products based on sales</h2>
            </div>
            <div className="flex  p-4">
                <div className='w-80 flex flex-col items-start justify-start font-dm gap-1 border-r-2 border-gray-400'>
                    <div className='flex gap-2 font-bold'>
                        <img src={category} alt="Category Icon" />
                        <h1 className='text-xl'>Categories</h1>
                    </div>
                    <ul className='font-semibold flex flex-col gap-1'>
                        <li className='text-primary'>Facial Cleanser</li>
                        <li>Pomade</li>
                        <li>Perfumes</li>
                        <li>Baby Powder</li>
                        <li>Eye Liner</li>
                        <li>Lip Clippers</li>
                    </ul>
                </div>
                <div className='font-dm  px-10 '>
                    <h1 className='font-bold'>Beauty & Personal Care</h1>

                </div>
                <div className='flex gap-32'>


                    <div className='flex flex-col w-60 py-20 gap-14'>
                        <img src={product}></img>
                        <div>
                            <h1>lorem ipsum fire tv with alexa voice remote
                                <span>Tv etc.</span></h1>
                            <img src={rating}></img>
                            <h2>$39.99 - $30.65</h2>

                        </div>
                        <img src={product2}></img>
                        <div>
                            <h1>lorem ipsum fire tv with alexa voice remote
                                <span>Tv etc.</span></h1>
                            <img src={rating}></img>
                            <h2>$39.99 - $30.65</h2>


                        </div>


                    </div>
                    <div className='w-60 py-20 flex flex-col gap-14 '>
                        <img src={product1}></img>
                        <div>
                            <h1>lorem ipsum fire tv with alexa voice remote
                                <span>Tv etc.</span></h1>
                            <img src={rating}></img>
                            <h2>$39.99 - $30.65</h2>
                        </div>

                        <img src={product3}></img>
                        <div>
                            <h1>lorem ipsum fire tv with alexa voice remote
                                <span>Tv etc.</span></h1>
                            <img src={rating}></img>
                            <h2>$39.99 - $30.65</h2>

                        </div>
                        <div className='flex justify-center text-white gap-3 py-3 '>
                            <button className='flex items-center bg-primary px-14  rounded-md  '> <AiOutlineArrowLeft></AiOutlineArrowLeft>Previous page</button>

                            <button className=' bg-primary px-7 w-52  rounded-md  '>1</button>
                            <button className=' bg-primary px-7 w-52  rounded-md  '>2</button>
                            <button className=' bg-primary px-7 w-52  rounded-md  '> 3</button>
                            <button className=' bg-primary px-7 w-52  rounded-md  '> 4</button>
                            <button className='flex items-center bg-primary px-10 w-52  rounded-md  '> Next page<AiOutlineArrowRight></AiOutlineArrowRight></button>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Product;
