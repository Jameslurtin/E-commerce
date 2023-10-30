import React from 'react'
import Orderimg from '../Images/Orderimg.png';
import rating from '../Images/Ratings.png';

function Order() {
    return (
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
            <button className='bg-primary text-white py-2 rounded-sm '>Continue</button>
            <div className='flex flex-col pl-52'>
            <h6>RETURN POLICY</h6>
            <h7>HELP</h7>
            </div>
            
        </div>
        </div>
    )
}

export default Order