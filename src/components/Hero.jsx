import React from 'react';
import Typed from 'react-typed';
import KLCC from '../assets/klcc-hero.png';
const Hero = () => {
  return (
    <div className='text-white '>
      
      <div className=' mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'
        style={{
          backgroundImage: `url(${KLCC})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        // darken overlay
        // https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
        liner
      >
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          <Typed
            strings={[
              'Study Abroad',
              'Work Abroad',
              'Live Abroad',
              'Travel Abroad',
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          
          <br /> <span className='text-[#00df9a]'>Made Easy</span>

        </h1>
        <button className='
        bg-[#5dffb9] rounded-md font-medium my-6 mx-auto py-3 text-black
        px-4 md:px-8
       hover:text-[#5dffb9] hover:bg-[#000000] transition duration-500 ease-in-out hover:border-[#5dffb9] hover:border-2
        '
        onClick={() => window.open('https://wa.me/601160941335?text=I%20have%20a%20question%20about%20your%20education%20consultancy%20services.', '_blank')}
        >
          Get Your Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Hero;
