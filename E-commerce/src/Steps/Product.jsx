import React from 'react'
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Options from '../Components/options';
import category from '../Images/category.png'

function Product() {
    return (
        <div>
            <Nav></Nav>
            <Options></Options>
            <div className='font-dm flex flex-col justify-center items-center text-white bg-[#0B8BA6] py-10 gap-3 '>
                <h1 className='text-4xl font-bold'>Aladdin Best sells</h1>
                <h2 className='text-sm'>Our most popular products based on sales</h2>
            </div>
            <div>
                <div> <img src={category}></img>  <h1></h1></div>

            </div>

            <Footer></Footer>
        </div>
    )
}

export default Product;