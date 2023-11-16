import React from 'react';
import Skills from '../cmp/Skill/Skills';

const Skill = () => {
  return (
    <div className='w-full bg-[#F8F9FA] py-16'>
        <div className='flex flex-col items-center gap-3 mb-10'>
            <div className='bg-[#008EC8] w-[100px] text-center text-white'>Skills</div>
        </div>

        <div className='max-w-[1240px] mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-10'>
            <Skills lang={"HTML/CSS"} per={"80%"} color={"#008EC8"} />
            <Skills lang={"JavaScript"} per={"60%"} color={"#008EC8"} />
            <Skills lang={"Tailwind CSS"} per={"85%"} color={"#008EC8"} />
            <Skills lang={"React Js"} per={"75%"} color={"#008EC8"} />
            <Skills lang={"Redux"} per={"90%"} color={"#008EC8"} />
            <Skills lang={"Material UI"} per={"60%"} color={"#008EC8"} />
            <Skills lang={"Firebase"} per={"85%"} color={"#008EC8"} />
            <Skills lang={"GIT & GITHUB"} per={"65%"} color={"#008EC8"} />
        </div>

        <div className='flex flex-col items-center gap-3 mt-10'>
            <button className='text-black py-3 px-8 border-black border-solid border-2 hover:text-white hover:bg-black duration-300'>Download CV</button>
        </div>
    </div>
  )
}

export default Skill;