import React from 'react'
import logoSvg from '../Images/Logo-white.svg';
import { Link } from 'react-router-dom';
function Sigin() {

    return (
        <div className='w-92 pt-10'>

            <div className='py-20 flex flex-col items-center justify-center gap-3 bg-primary '>
                <div className='bg-primary'>
                    <img className='px-12 py-3' src={logoSvg} alt="Logo" />
                </div>
                <input placeholder='phone number , username or email' className='w-80 h-10 border-b-4 border-t-4 border-l-4 border-r-4   py-3'></input>
                <input placeholder='password' className='w-80 h-10  border-b-4 border-t-4 border-l-4 border-r-4 mt-4 py-3' ></input>
                <Link to ='/Home'target='_parent'>
                <button className='bg-green-400 py-3  px-2 rounded-md'>SignIn</button>
                </Link>
            </div>
        </div>
    )
}

export default Sigin