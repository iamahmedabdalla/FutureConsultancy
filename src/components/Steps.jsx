import React from 'react'

const Steps = () => {
  return (
    <div className='flex flex-col items-center justify-center text-black bg-[#ffffff] py-20 px-5' id='steps'>
        <h1 className='text-3xl font-bold'>Five Easy <span className='text-[#5dffb9]'>Steps</span></h1>
        <div className='flex flex-col md:flex-row items-center justify-center mt-10'>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-[#5dffb9] rounded-full w-20 h-20 flex items-center justify-center'>
                    <h1 className='text-3xl font-bold'>1</h1>
                </div>
                <a href='https://wa.me/601160941335?text=I%20have%20a%20question%20about%20your%20education%20consultancy%20services' className='text-lg font-bold mt-4'>Book a consultation</a>
                <p className='text-center mt-4'>
                    Talk to our expert counsellors to understand your options and the best course of action for you.        
                </p>
            </div>
            <div className='flex flex-col items-center justify-center mt-10 md:mt-0'>
                <div className='bg-[#5dffb9] rounded-full w-20 h-20 flex items-center justify-center'>
                    <h1 className='text-3xl font-bold'>2</h1>
                </div>
                <h1 className='text-lg font-bold mt-4'>Get your documents ready</h1>
                <p className='text-center mt-4'>
                    We will guide you through the process of getting your documents ready for your application.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center mt-10 md:mt-0'>
                <div className='bg-[#5dffb9] rounded-full w-20 h-20 flex items-center justify-center'>
                    <h1 className='text-3xl font-bold'>3</h1>
                </div>
                <h1 className='text-lg font-bold mt-4 '>Submit application</h1>
                <p className='text-center mt-4'>
                    We will submit your application to the relevant authorities on your behalf.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center mt-10 md:mt-0'>
                <div className='bg-[#5dffb9] rounded-full w-20 h-20 flex items-center justify-center'>
                    <h1 className='text-3xl font-bold'>4</h1>
                </div>
                <h1 className='text-lg font-bold mt-4'>Get your visa</h1>
                <p className='text-center mt-4'>
                    We will keep you updated on the progress of your application and let you know when your visa is ready.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center mt-10 md:mt-0'>
                <div className='bg-[#5dffb9] rounded-full w-20 h-20 flex items-center justify-center'>
                    <h1 className='text-3xl font-bold'>5</h1>
                </div>
                <h1 className='text-lg font-bold mt-4'>Book Flight</h1>
                <p className='text-center mt-4'>
                    We will help you book your flight and get you ready for your new life in your new country.
                </p>
            </div>
        </div>

        
    </div>
  )
}

export default Steps