import React from 'react'
import { MdClose } from "react-icons/md";

const Notification = () => {
  return (
    <div className='m-4 p-2 border-blanco border-2 text-blanco shadow-md flex items-start font-Roboto-Regular'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, asperiores!</p>
        <button className='text-blanco'><MdClose/></button>
    </div>
  )
}

export default Notification