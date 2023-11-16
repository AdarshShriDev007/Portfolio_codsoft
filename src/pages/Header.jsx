import React, { useState } from 'react';
import {IoCall} from "react-icons/io5";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import Menus from '../cmp/Header/Menus';
import {BsTwitter} from "react-icons/bs";
import {FaFacebookSquare} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Socials from '../cmp/Header/Socials';
import { useMenu } from '../contextApi/MenuContext';
import SocialsLink from '../assets/Socials.json';

const Header = () => {

  const menuData = useMenu();

  return (
    <>
      <div className='w-full bg-white shadow-md sticky top-0 left-0 z-10'>
          <div className='max-w-[1240px] p-5 mx-auto'>
              <div className='flex items-center justify-between'>
                  <img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/128/3665/3665909.png" alt="logo" />
                  
                  <div className='flex items-center gap-4'>
                      <IoCall className='text-xl' />
                      <h2 className='text-bash font-bold'>(+91) 836 828 4349</h2>
                      {
                        !menuData.open ? <GiHamburgerMenu onClick={()=>menuData.setOpen(true)} className='text-2xl cursor-pointer' /> : <AiOutlineClose onClick={()=>menuData.setOpen(false)} className='text-2xl cursor-pointer text-white' />
                      }
                      
                      
                  </div>
              </div>
          </div>
      </div>
      {
        menuData.open && (
          <div className='w-full fixed top-0 left-0 h-[100vh] bg-[rgba(0,0,0,0.8)] z-20'>
            <div className='max-w-[1240px] px-5 pt-5 mx-auto flex justify-end items-center'>
              <AiOutlineClose onClick={()=>menuData.setOpen(false)} className='text-2xl cursor-pointer text-white mt-[7px]' />
            </div>
            <div className='max-w-[1240px] p-5 mx-auto text-white h-[100%] flex flex-col items-center justify-center'>
              <ul className='flex flex-col items-center text-xl gap-4 mb-10'>
                <Menus name={"Home"} pathName="/" />
                <Menus name={"About Me"} pathName="about"  />
                <Menus name={"What I Do"} pathName="what_i_do" />
                <Menus name={"Skills"} pathName="skills" />
                <Menus name={"Projects"} pathName="projects"  />
                <Menus name={"Contact Me"} pathName="contact" />
              </ul>

              <ul className='flex items-center gap-4 text-2xl'>
                <Socials icon={<FaLinkedinIn />} link={SocialsLink.linkedin} />
                <Socials icon={<FaGithub />} link={SocialsLink.github} />
                <Socials icon={<BsTwitter />} link={SocialsLink.twitter} />
                <Socials icon={<FaFacebookSquare />} link={SocialsLink.facebook} /> 
                <Socials icon={<BsInstagram />} link={SocialsLink.instagram} />  
              </ul>
            </div>
          </div>
        )
      }
      
    </>
  )
}

export default Header;