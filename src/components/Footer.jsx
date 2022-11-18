import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'> Next Future Consultancy </h1>
        <p className='py-4'>
          Next Future Consultancy is a leading educational agency that provides a wide range of
          services to students who wish to study abroad. We are a team of highly experienced
          professionals who have been in the industry for over 10 years. We have helped thousands of
          students to achieve their dreams of studying abroad.

        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Services</h6>
        <ul>
            <li className='py-2 text-sm'>Education Consultancy Services</li>
            <li className='py-2 text-sm'>Student Visa Services</li>
            <li className='py-2 text-sm'>Scholarship Services</li>
            <li className='py-2 text-sm'>Student Accommodation Services</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>FAQ</li>
            <li className='py-2 text-sm'>
            <a href='https://wa.me/601160941335?text=I%20have%20a%20question%20about%20your%20education%20consultancy%20services'>
                  Contact Us
                </a>
            </li>
            <li className='py-2 text-sm'>
              <a href='mailto:ahmed@futureconsultancy.net'>
                Email Us
              </a>
            </li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
