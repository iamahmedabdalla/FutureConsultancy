import React from 'react'
import { FaRegHandshake, FaBusinessTime, FaFireAlt, FaPlus } from "react-icons/fa";
const Reasons = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#000300] text-white py-20' id='why_us' >
      <h1 className='text-4xl text-[#ffc85b] font-bold'>Why Choose <span className='text-[#FFCB65]'>US?</span>
      </h1>
      <div className='flex flex-col md:flex-row justify-center items-center mt-10'>
        <div className='flex flex-col justify-center items-center p-4'>
          <div className='bg-[#FFCB65] rounded-full p-4'>
            <FaPlus size={40} color='#763C00' />
          </div>
          <h1 className='text-2xl font-bold mt-4'>Priority Agent</h1>
          <p className='text-center mt-4'>
            We hold priority status with all major carriers, which means we can
            get you the best rates and service.
          </p>
        </div>

        <div className='flex flex-col justify-center items-center p-4'>
          <div className='bg-[#FFCB65] rounded-full p-4'>
            < FaFireAlt size={40} color='#763C00' />
          </div>
          <h1 className='text-2xl font-bold mt-4'>Dedicated Experts</h1>
          <p className='text-center mt-4'>
            We have a team of dedicated experts who will work with you to find
            the best solution for your business.
          </p>
        </div>

        <div className='flex flex-col justify-center items-center p-4'>
          <div className='bg-[#FFCB65] rounded-full p-4'>
            <FaBusinessTime size={40} color='#763C00' />
          </div>
          <h1 className='text-2xl font-bold mt-4'>We don't waste time</h1>
          <p className='text-center mt-4'>
            We don't waste time. We get you the best rates and service, and we
            get it done quickly.
          </p>
        </div>

        <div className='flex flex-col justify-center items-center p-4'>
          <div className='bg-[#FFCB65] rounded-full p-4'>
            <FaRegHandshake size={40} color='#763C00' />
          </div>
          <h1 className='text-2xl font-bold mt-4'>Dedicated Counsellor</h1>
          <p className='text-center mt-4'>
            We have a dedicated counsellor who will work with you to find the
            best solution for your business.
          </p>
        </div>

        

      </div>
      <button className='
        bg-[#FFCB65] rounded-md font-medium my-6 mx-auto py-3 text-black
        px-4 md:px-8
       hover:text-[#FFCB65] hover:bg-[#000000] transition duration-500 ease-in-out hover:border-[#FFCB65] hover:border-2
        '
        onClick={() => window.open('https://wa.me/601160941335?text=I%20have%20a%20question%20about%20your%20education%20consultancy%20services.', '_blank')}
        >
          Get Your Free Consultation
        </button>
    </div>
  )
}

export default Reasons