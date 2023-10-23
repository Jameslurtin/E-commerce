import React from 'react';
import Nav from '../Components/Nav';
import Options from '../Components/options';
import Footer from '../Components/Footer';
import rec from '../Images/Rectangle007.png';

function Cart() {
    return (
        <div className='font-dm'>
            <Nav />
            <Options />
            <div className='px-20 mt-4 py-10 '>
                <h1 className='font-bold text-2xl'>Cart (2 items)</h1>
            </div>
            <div className='flex justify-center mt-8'>
                <table className='border-collapse border-2 border-[#404040] w-[650px] text-base'>
                    <thead>
                        <tr className='bg-[#0B8BA6] text-white'>
                            <th className='py-2 px-4'>Items</th>
                            <th className='py-2 px-4'>Price</th>
                            <th className='py-2 px-4'>Quantity</th>
                            <th className='py-2 px-4'>Total</th>
                            <th className='py-2 px-4'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b border-[#404040]'>
                            <td className='py-2 px-4 flex items-center'>
                                <img src={rec} className='w-16 h-16 mr-4' alt='Product' />
                                Product Name 1
                            </td>
                            <td className='py-2 px-4'>$19.99</td>
                            <td className='py-2 px-4'>2</td>
                            <td className='py-2 px-4'>$39.98</td>
                            <td className='py-2 px-4'>
                                <button className='bg-red-500 text-white py-1 px-2 rounded'>Remove</button>
                            </td>
                        </tr>
                        {/* Add vertical padding between product rows */}
                        <tr className='border-b border-[#404040] py-4'>
                            <td className='py-2 px-4 flex items-center'>
                                <img src={rec} className='w-16 h-16 mr-4' alt='Product' />
                                Product Name 2
                            </td>
                            <td className='py-2 px-4'>$24.99</td>
                            <td className='py-2 px-4'>1</td>
                            <td className='py-2 px-4'>$24.99</td>
                            <td className='py-2 px-4'>
                                <button className='bg-red-500 text-white py-1 px-2 rounded'>Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='pt-10'>
            <Footer />
            </div>
        
        </div>
    );
}

export default Cart;
