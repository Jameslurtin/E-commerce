import React from 'react';
import logoSvg from '../Images/Logo-white.svg'; 
import facebook from '../Images/Facebook.png';
import twitter from '../Images/Twitter.png';
import instagram from '../Images/Instagram.png';
import youtube from '../Images/youtube.png';


const Footer = () => {
    return (
        <footer className="bg-primary text-white py-6 text-center ">
            <div >
                <div className='px-20  '>
                    <img className='px-12 py-3' src={logoSvg} alt="Logo" />
                </div>
                <div className='flex justify-start items-center  text-sm px-32  py-3'>
                    <h1>Aladdin for everyone order regular and<span className='flex'>become a prime customer.</span></h1>
                </div>
                <div className='flex px-32 py-3'>
                    <img src={facebook}></img>
                    <img src={twitter}></img>
                    <img src={instagram}></img>
                    <img src={youtube}></img>
                </div>
                <div className='flex gap-7 justify-center  py-2 '>
                
                    <ul>
                    <h1 className='font-dm font-bold py-5 '>Product</h1>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Case studies</li>
                        <li>Reviews</li>
                        <li>Updates</li>

                    </ul>
                    <div>

                    <h1 className='font-dm font-bold  py-5'>Company</h1>
                        <ul>
                            
                            <li>About </li>
                            <li>Contact us </li>
                            <li>Careers </li>
                            <li>Culture </li>
                            <li>Blog </li>

                        </ul>
                    </div>
                    <div >

                    <h1 className='font-dm font-bold py-5'>Support</h1>
                        <ul>
                            
                            <li>Getting started </li>
                            <li>Help center</li>
                            <li>Server status  </li>
                            <li>Report a bug</li>
                            <li>Chat support</li>

                        </ul>
                    </div>
                    <div >
                    <h1 className='font-dm font-bold  py-5'>Download</h1>

                        <ul>
                           
                            <li>iOS </li>
                            <li>Android</li>
                            <li>Mac</li>
                            <li>Windows</li>
                            <li>Chrome</li>


                        </ul>
                    </div>

                </div>


            </div>
            <div className='py-3'>____________________________________________________________________________________________________________________________________________________________________________________________</div>
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
