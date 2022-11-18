import React from 'react'

const StillLost = () => {
  return (
    <div className='flex justify-center items-center w-full h-1/2  rounded-lg p-10 gap-10'>
        <h1 className='text-3xl font-bold text-[#5dffb9]'>Still Lost?</h1>
        <button className='
        bg-[#fff52e] rounded-md font-medium my-6 mx-full py-3 text-black px-10 w-1/2
       md:px-8
       hover:text-[#fff52e] hover:bg-[#000000] transition duration-500 ease-in-out hover:border-[#fff52e] hover:border-2
        '
        onClick={() => window.open('https://wa.me/601160941335?text=I%20have%20a%20question%20about%20your%20education%20consultancy%20services.', '_blank')}
        >
          Let's Chat
        </button>
    </div>

  )
}

export default StillLost