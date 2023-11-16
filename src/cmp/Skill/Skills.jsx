import React from 'react';

const Skills = ({lang,per,color}) => {

    const skillStyle = {
        width: per,
        backgroundColor: color,
      };

  return (
    <div className='flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
            <h4 className='font-bold'>{lang}</h4>
            <h4 className='font-bold'>{per}</h4>
        </div>
        <div className='w-full h-[8px] rounded-3xl bg-[#ddd]'>
            <div style={skillStyle} className={`h-full rounded-3xl`}></div>
        </div>
    </div>
  )
}

export default Skills;