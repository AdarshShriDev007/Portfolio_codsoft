import React, { useState } from 'react';
import {Link, useSearchParams} from "react-router-dom";
import { useMenu } from '../../contextApi/MenuContext';

const Menus = ({name,pathName}) => {

  const menuData = useMenu();
  
  return (
    <Link to={pathName} onClick={()=>menuData.setOpen(false)}>
      <li className={`hover:text-cyan-500 cursor-pointer hover:scale-105 duration-300`}>{name}</li>
    </Link>
  )
}

export default Menus;