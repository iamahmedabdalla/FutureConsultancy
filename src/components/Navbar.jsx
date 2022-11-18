import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo1 from '../assets/logo1.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    return (
      setNav(!nav)
    )
  };


  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <img src={logo1} style={{
        width: '32px',
        marginRight: '5px'
      }} />
      <h1 className='w-full text-3xl font-bold text-[#5dffb9]'>
        Future <span className='text-white'>Consultancy</span>
        </h1>
      <ul className='hidden md:flex flex-row justify-between items-center gap-10'>
        <li className='p-4'>Home</li>
        <li className='p-4'>
          <a href='#services'>
            Services
          </a>
        </li>
        <li className='p-4 w-full'>
          <a href='#why_us'> WhyUs </a>
        </li>
        <li className='p-4'>
          <a href='#steps'> Steps </a>
        </li>
        <li className='p-4'>
          <a href='https://wa.me/601160941335?text=I%20have%20a%20question%20about%20your%20education%20consultancy%20services'>
            Contact
          </a>
        </li>
      </ul>
      <div className='md:hidden' onClick={toggleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
       
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> Future <span className='text-white'>Consultancy</span> </h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>
          <a href='#services'>
            Services
          </a>
          </li>
          <li className='p-4 border-b border-gray-600'>
          <a href='#why_us'> Why Us </a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a href='#steps'> Steps </a>
          </li>
          <li className='p-4'>
          <a href='https://wa.me/601160941335?text=I%20have%20a%20question%20about%20your%20education%20consultancy%20services'>
            Contact Us </a>
          </li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
