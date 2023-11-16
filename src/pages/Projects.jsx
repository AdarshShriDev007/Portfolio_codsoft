import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import projectsData from "../assets/Projects.json";

const Projects = () => {

    const [tab,setTab] = useState(1);

    const Tabs = ({data})=>{
        return (
            <div onClick={()=>setTab(data.tabno)} className={`text-white cursor-pointer ${tab === data.tabno && 'border-b-2 border-white'}`}>
                {data.tab}
            </div>
        );
    }

    const ProjectList = ({data})=>{
        return (
            <div className='relative border rounded-lg group overflow-hidden'>
                <img src={data.thumb} alt="pic" className='prouded-lg group-hover:scale-110 duration-300' />
                <div className='hidden group-hover:block rounded-lg absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)]'>
                    <div className='flex flex-col justify-center items-center h-full gap-3'>
                        <h4 className='text-white hover:underline'><a href={data.website}>{data.title}</a></h4>
                        <a href={data.github}><FaGithub className='text-white text-xl hover:text-[#008EC8]' /></a>
                    </div>    
                </div>
            </div>
        )
    }

  return (
    <>
        <div className='w-full bg-[#008EC8] py-16'>
            <div className='flex flex-col items-center gap-3 mb-10'>
                <div className='bg-white w-[100px] text-center text-[#008EC8]'>Projects</div>
                <h2 className='text-4xl font-extrabold text-white'>Some of my most recent projects</h2>
    
                <div className='flex gap-10 mt-10'>
                    {
                        projectsData.map((item,index)=>{
                            return <Tabs key={index} data={item} /> 
                        })
                    }    
                </div>
            </div>

                {
                    projectsData.map((item,index)=>{
                        return <div key={index} className={`${tab === item.tabno ? 'block' : 'hidden'} max-w-[1240px] mx-auto p-5 grid grid-cols-1 md:grid-cols-3 gap-5`}>
                            {
                                item.items.map((itemData,index)=>{
                                    return <ProjectList key={index} data={itemData} />
                                })
                            }
                        </div>
                    })
                }
      
        </div>
    </>

  )
}

export default Projects;