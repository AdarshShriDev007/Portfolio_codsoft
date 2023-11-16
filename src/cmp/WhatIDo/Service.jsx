import React from 'react';

const Service = ({icon,name,detail}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
        {icon}
        <h3 className='text-xl font-extrabold'>{name}</h3>
        <p className='text-justify text-[#6C757D]'>{detail}</p>
    </div>
  )
}

export default Service;