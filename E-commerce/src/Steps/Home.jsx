import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowForward } from 'react-icons/io';
import Footer from '../Components/Footer';
import Firstimg from '../Images/First-image.png';
import Rectangle1 from '../Images/Rectangleimg 1.png';
import Rectangle2 from '../Images/Rectangleimg 2.png';
import Rectangle3 from '../Images/Rectangleimg 3.png';
import Rectangle4 from '../Images/Rectangleimg 4.png';
import Rectangle5 from '../Images/Rectangleimg 5.png';
import nike from '../Images/Nike.png';
import louis from '../Images/Louis.png';
import dove from '../Images/Dove.png';
import zara from '../Images/Zara.png'
import Cvs from '../Images/CVS Pharmacy.png';
import Colgate from '../Images/Colgate.png';
import Cerave from '../Images/CeraVe.png';
import Nav from '../Components/Nav';




function Home() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Nav></Nav>

            {/* Carousel Slider */}
            <div className='my-6   '>
                <Slider {...settings}>


                    <div>
                        <div className='flex items-center justify-center'>
                            <div >
                                <h1 className='font-dm font-bold text-5xl'>Get the new <span className='text-[#B4856F]'>beauty buzz.</span></h1>
                                <h2 className='text-sm font-medium py-4'>The latest, greatest & freshest from <span className='flex flex-col'>your fave brands.</span></h2>
                                <button className='bg-[#99715D] px-4 py-2 rounded-md text-white hover:bg-[#785549] transition duration-300'>
                                    Shop Now
                                </button>
                            </div>
                            <div className='flex-shrink-0 w-[741px]'>
                                <img src={Firstimg} alt='Descriptive Alt Text' className='w-full h-auto' />
                            </div>
                        </div>

                    </div>
                    <div>
                        <img src='carousel-image2.jpg' alt='Carousel Slide 2' className='w-full flex justify-end items-center' />
                    </div>
                    {/* Add more carousel slides as needed */}

                </Slider>
            </div>
            <div className='px-20 flex items-center gap-[750px] '>
                <h1 className='font-semibold font-dm  text-3xl'>Explore popular category</h1>

                <h2 className='font-dm font-bold text-2xl flex items-center '>| See all<IoIosArrowForward ></IoIosArrowForward></h2>
            </div>
            <div className='flex items-center justify-center gap-7 py-3'>
                {[
                    { id: 1, imageUrl: Rectangle1, name: 'Beauty & Personal Care' },
                    { id: 2, imageUrl: Rectangle2, name: 'Health & Household' },
                    { id: 3, imageUrl: Rectangle3, name: 'Home & Kitchen' },
                    { id: 4, imageUrl: Rectangle4, name: 'Aladdin Pharmacy' },
                    { id: 5, imageUrl: Rectangle5, name: 'Medical Instruments' }
                ].map((category) => (
                    <div key={category.id}>
                        <img src={category.imageUrl} alt={category.name} />
                        <h1>{category.name}</h1>
                    </div>
                ))}
            </div>
            <div className='text-2xl font-bold px-20 py-4'>
                <h1>popular brand</h1>
            </div>

            <div className='flex items-center justify-start gap-3 px-20 py-4'>
                <img src={nike}></img>
                <img src={dove}></img>
                <img src={louis}></img>
                <img src={Cvs}></img>
                <img src={Colgate}></img>
                <img src={Cerave}></img>

            </div>
            <Footer></Footer>
        </div>


    );
}

export default Home;
