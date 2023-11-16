import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import {RiPencilRuler2Fill} from "react-icons/ri";
import {BiDesktop} from "react-icons/bi";
import {FaPaintbrush} from "react-icons/fa6";
import {FaLaptopCode} from "react-icons/fa6";
import {TbPhotoCode} from "react-icons/tb";


import Service from "../cmp/WhatIDo/Service";

const WhatIDo = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="flex flex-col items-center gap-3 mb-10 px-5">
        <div className="bg-[#008EC8] w-[100px] text-center text-white">
          What I Do?
        </div>
        <h2 className="text-4xl font-extrabold">
          How I can help your next project
        </h2>
      </div>

      <div className="max-w-[1240px] mx-auto p-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        <Service
          icon={
            <BsCodeSlash className="text-5xl text-[#008EC8] font-extrabold" />
          }
          name={"Web Development"}
          detail={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          }
        />

        <Service
          icon={
            <RiPencilRuler2Fill className="text-5xl text-[#008EC8] font-extrabold" />
          }
          name={"UI/UX Design"}
          detail={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          }
        />

        <Service
          icon={
            <BiDesktop className="text-5xl text-[#008EC8] font-extrabold" />
          }
          name={"Web Design"}
          detail={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          }
        />

        <Service
          icon={
            <FaPaintbrush className="text-5xl text-[#008EC8] font-extrabold" />
          }
          name={"App Design & Develop"}
          detail={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          }
        />

        <Service
          icon={
            <FaLaptopCode className="text-5xl text-[#008EC8] font-extrabold" />
          }
          name={"Frontend Development"}
          detail={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          }
        />

        <Service
          icon={
            <TbPhotoCode className="text-5xl text-[#008EC8] font-extrabold" />
          }
          name={"UI/UX Development"}
          detail={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          }
        />
      </div>
    </div>
  );
};

export default WhatIDo;
