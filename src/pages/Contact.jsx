import React, { useState } from "react";
import Socials from "../cmp/Header/Socials";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import SocialsLink from '../assets/Socials.json';

const Contact = () => {

  const [fullname,setFullname] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  return (
    <div className="w-full bg-[#009FE2] py-16 text-white">
      <div className="max-w-[1240px] mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl font-bold">Let's get in touch</h2>
          <p>
            I enjoy discussing new projects and design challenges. Please share
            as much info, as possible so we can get the most out of our first
            catch-up.
          </p>
          <div>
            <h4 className="font-bold text-lg">Living In:</h4>
            <p>New Delhi, Delhi, India</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Call:</h4>
            <p>+91 8368284349</p>
          </div>

          <ul className="flex items-center gap-4 text-2xl">
              <Socials icon={<FaLinkedinIn />} link={SocialsLink.linkedin} />
              <Socials icon={<FaGithub />} link={SocialsLink.github} />
              <Socials icon={<BsTwitter />} link={SocialsLink.twitter} />
              <Socials icon={<FaFacebookSquare />} link={SocialsLink.facebook} /> 
              <Socials icon={<BsInstagram />} link={SocialsLink.instagram} />  
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-4xl font-bold">Estimate your Project?</h2>
          <form className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <label>What is Your Name:</label>
              <input
                onChange={(e)=>setFullname(e.value.target)}
                value={fullname}
                type="text"
                className="bg-transparent border-b-2 border-slate-400 outline-none focus:border-white duration-300"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label>Your Email Address:</label>
              <input
                onChange={(e)=>setEmail(e.value.target)}
                value={email}
                type="email"
                className="bg-transparent border-b-2 border-slate-400 outline-none focus:border-white duration-300"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label>How can I Help you?:</label>
              <textarea
                onChange={(e)=>setMessage(e.value.target)}
                value={message}
                rows="5"
                className="bg-transparent border-b-2 border-slate-400 outline-none focus:border-white duration-300"
              ></textarea>
            </div>

            <div className="flex flex-col items-start mt-5">
              <button className="text-black py-3 px-8 border-black border-solid border-2 hover:text-white hover:bg-black duration-300">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
