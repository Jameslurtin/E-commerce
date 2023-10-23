import React from 'react'
import Nav from '../Nav';
import Footer from '../Footer';
import Options from '../options';

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
                <h1></h1>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Product;