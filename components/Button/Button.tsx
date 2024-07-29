import React from 'react'
import { MdMenu } from "react-icons/md";

const Button = () => {
  return (
    <>
        <button className="absolute z-10 top-0 right-0 w-10 h-10 bg-blanco border-primary-blue border-2 shadow-md text-primary-blue  m-4 flex items-center justify-center"><MdMenu/></button>
    </>
  )
}

export default Button