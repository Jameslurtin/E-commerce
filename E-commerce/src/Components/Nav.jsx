import React, { useState } from 'react';
import logoSvg from '../Images/Logo-white.svg';
import { BsSearch } from 'react-icons/bs';
import { BsCartPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Nav() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
   
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
   
  };

  return (
    <div className='bg-primary font-dm text-4xl text-white flex'>
      <div>
        <img className='px-12 py-3' src={logoSvg} alt="Logo" />
      </div>

      <div className="search-bar flex justify-center items-center gap-1 text-gray-400 text-base ">
        <input
          type="text"
          placeholder="Search Aladdin"
          value={searchText}
          onChange={handleSearchChange}
          className='h-10 px-14 rounded-l-md'
        />

        <select value={selectedCategory} onChange={handleCategoryChange} className='h-10 text-gray-400 text-base'>
          <option value="All">All Categories</option>
          <option value="Category1">Category 1</option>
          <option value="Category2">Category 2</option>
          
        </select>

        <div>
          <button className='text-white h-10 bg-secondary px-5'><BsSearch /></button>
        </div>
      </div>

      <div className='flex justify-center items-center text-lg px-40 '>
        <nav className='flex gap-5'>
          <a><Link to ='/Home'target='_parent'>Home</Link></a>
          <a><Link to ='/Aboutus'>About Us</Link></a>
          <a><Link to ='/product-page'>Shop</Link></a>
          <a><Link to ='/Contactus'>Contact Us</Link></a>
          <a><Link to ='/profile'>My Account</Link></a>
          <a className='flex justify-center items-center'><span><BsCartPlusFill /></span><Link to ='/cart'>Cart</Link></a>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
