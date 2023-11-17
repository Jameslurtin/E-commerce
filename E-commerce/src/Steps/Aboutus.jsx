import React from 'react'
import Nav from '../Components/Nav'
import Options from '../Components/options'
import Footer from '../Components/Footer'

function Aboutus() {
    return (
        <div>
            <Nav></Nav>
            <Options></Options>
            <div className='font-dm flex flex-col justify-center px-32 pt-32 gap-7 pb-20'>
                <h1 className='font-bold  py-6 text-3xl'>About Us</h1>
                  <h2 className='font-dm text-lg '>
                Founded in August of 2008 and based in San Francisco, California, Airbnb is a trusted community
                marketplace for people to list, discover, and book unique accommodations around the world — online or
                from a mobile phone or tablet.

                Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to
                unique travel experiences, at any price point, in more than 65,000 cities and 191 countries. And with
                World-class customer service and a growing community of users, Airbnb is the easiest way for people to
                monetize their extra space and showcase it to an audience of millions.
                </h2>
            </div>
            <Footer></Footer>
            
        </div>
    )
}

export default Aboutus