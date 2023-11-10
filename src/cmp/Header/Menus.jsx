import React from 'react';

const Menus = ({name}) => {
  return (
    <li className='hover:text-cyan-500 cursor-pointer hover:scale-105 duration-300'>{name}</li>
  )
}

export default Menus;