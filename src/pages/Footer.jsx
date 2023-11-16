import React from 'react';

const Footer = () => {
  return (
    <div className='w-full bg-black'>
        <div className='max-w-[1240px] mx-auto px-5 py-10 text-white flex flex-col md:flex-row items-center justify-between'>
            <h4 className='flex items-center gap-2'>Copyright © 2023 <img className='w-[20px]' src="https://cdn-icons-png.flaticon.com/128/3665/3665909.png" alt="logo" />. All Rights Reserved.</h4>
            <h4>Designed by <a href='#' className='text-[#008EC8] underline'>Adarsh K. Shri.</a></h4>
        </div>
    </div>
  )
}

export default Footer;