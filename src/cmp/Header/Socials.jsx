import React from 'react';

const Socials = ({icon,link}) => {
  return (
    <li className='hover:text-cyan-500 cursor-pointer hover:scale-125 duration-300'><a href={link}>{icon}</a></li>
  )
}

export default Socials;