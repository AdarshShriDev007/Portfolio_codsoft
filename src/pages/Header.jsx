import React, { useState } from 'react';
import {IoCall} from "react-icons/io5";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import Menus from '../cmp/Header/Menus';
import {BsTwitter} from "react-icons/bs";
import {FaFacebookSquare} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {FaDribbble} from "react-icons/fa";
import Socials from '../cmp/Header/Socials';

const Header = () => {

  const [open,setOpen] = useState(false);

  return (
    <>
      <div className='w-full shadow-md'>
          <div className='max-w-[1240px] p-5 mx-auto'>
              <div className='flex items-center justify-between'>
                  <img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/128/3665/3665909.png" alt="logo" />
                  
                  <div className='flex items-center gap-4'>
                      <IoCall className='text-xl' />
                      <h2 className='text-bash font-bold'>(+91) 836 828 4349</h2>
                      {
                        !open ? <GiHamburgerMenu onClick={()=>setOpen(true)} className='text-2xl cursor-pointer' />  : <AiOutlineClose onClick={()=>setOpen(false)} className='text-2xl cursor-pointer text-white z-10' />
                      }
                      
                      
                  </div>
              </div>
          </div>
      </div>
      {
        open && (
          <div className='w-full fixed top-0 left-0 h-[100vh] bg-[rgba(0,0,0,0.8)]'>
            <div className='max-w-[1240px] p-5 mx-auto text-white h-[100%] flex flex-col items-center justify-center'>
              
              <ul className='flex flex-col items-center text-xl gap-4 mb-10'>
                <Menus name={"Home"}  />
                <Menus name={"About Me"}  />
                <Menus name={"What I Do"}  />
                <Menus name={"Resume"} />
                <Menus name={"Portfolio"}  />
                <Menus name={"FAQ"}  />
                <Menus name={"Client Speak"}  />
                <Menus name={"Contact Me"} />
              </ul>

              <ul className='flex items-center gap-4 text-2xl'>
                <Socials icon={<BsTwitter />} />
                <Socials icon={<FaFacebookSquare />} /> 
                <Socials icon={<BsInstagram />} />
                <Socials icon={<FaLinkedinIn />} />
                <Socials icon={<FaDribbble />} />
              </ul>
            </div>
          </div>
        )
      }
      
    </>
  )
}

export default Header;