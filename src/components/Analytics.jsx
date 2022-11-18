import React from 'react';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='services'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center p-4'>
          <h1 className='text-3xl font-bold text-[#763C00] mb-4 md:mb-0 items-center'>
            Services <span className='text-[#FFCB65]'>We Offer</span>

          </h1>
        </div>

          <div className='flex flex-col md:flex-row justify-between items-center
          gap-5 py-0 flex-grow
          '>

            <div className=' border-2 border-[#FFCB65] rounded-md p-4
            md:w-1/2 md:h-1/2
            sm:w-1/2 sm:h-1/2
            xs:w-full xs:h-full
            xl:w-1/2 xl:h-1/2
            w-full h-full
            bg-[#FFCB65] text-white
            '>
              <h1 className='text-2xl font-bold text-[#763C00] mb-4'>
              Education Consultancy Services
              </h1>
              <p className='text-[#763C00]'>
              We provide you with the best education consultancy services to help you make the right decision for your future.
              </p>
              <button className=' bg-[#763C00] rounded-md font-medium my-6 mx-auto py-3 text-white px-4 md:px-8 hover:text-white hover:bg-[#000000] transition duration-500 ease-in-out '> Learn More </button>

            </div>

            <div className=' border-2 border-[#FFCB65] rounded-md p-4
            md:w-1/2 md:h-1/2
            sm:w-1/2 sm:h-1/2
            xs:w-full xs:h-full
            xl:w-1/2 xl:h-1/2
            w-full h-full
            bg-[#FFCB65] text-white
            '>
              <h1  className='text-2xl font-bold text-[#763C00] mb-4'>
              Student Visa Services
              </h1>
              <p className='text-[#763C00]'>
              Whether you’re looking to study abroad or planning for a career overseas. See how we can help you study, work and live in leading destinations around the world. 
              </p>
              <button className=' bg-[#763C00] rounded-md font-medium my-6 mx-auto py-3 text-white px-4 md:px-8 hover:text-white hover:bg-[#000000] transition duration-500 ease-in-out '> Learn More </button>

            </div>

            <div className=' border-2 border-[#FFCB65] rounded-md p-4
            md:w-1/2 md:h-1/2
            sm:w-1/2 sm:h-1/2
            xs:w-full xs:h-full
            xl:w-1/2 xl:h-1/2
            w-full h-full
            bg-[#FFCB65] text-white
            '>
                 <h1  className='text-2xl font-bold text-[#763C00] mb-4'>
              Scholarship Services
              </h1>
              <p className='text-[#763C00]'>
              There are a wide variety of scholarships available across many of our partner institutions. Our education consultants can help find the right one for you.             
               </p>
               <button className=' bg-[#763C00] rounded-md font-medium my-6 mx-auto py-3 text-white px-4 md:px-8 hover:text-white hover:bg-[#000000] transition duration-500 ease-in-out '> Learn More </button>

            </div>

            <div className=' border-2 border-[#FFCB65] rounded-md p-4
            md:w-1/2 md:h-1/2
            sm:w-1/2 sm:h-1/2
            xs:w-full xs:h-full
            xl:w-1/2 xl:h-1/2
            w-full h-full
            bg-[#FFCB65] text-white
            '>
                 <h1  className='text-2xl font-bold text-[#763C00] mb-4'>
              Student Accommodation
              </h1>
              <p className='text-[#763C00]'>
              We provide you with the best student accommodation services to help you make the right decision for your future.
              </p>
              <button className=' bg-[#763C00] rounded-md font-medium my-6 mx-auto py-3 text-white px-4 md:px-8 hover:text-white hover:bg-[#000000] transition duration-500 ease-in-out '> Learn More </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Analytics;
