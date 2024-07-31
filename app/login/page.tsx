import Image from 'next/image'
import Logo from "../../public/Logo.svg";
import React from 'react'

const Login = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-80 gap-3 p-10 font-Roboto-Regular'>
            <Image src={Logo} alt='Logo' width={250} height={250}/>
            <div className='flex flex-col items-start gap-3'>
                <label htmlFor="user">Usuario:</label>
                <input className='border-2 border-secondary-light-blue p-2 accent-primary-blue' id='user' type="text" />
            </div>
            <div className='flex flex-col items-start gap-3'>
                <label htmlFor="password">Contraseña:</label>
                <input className='border-2 border-secondary-light-blue p-2 accent-primary-blue' id='password' type="password" />
            </div>
        </div>
    </div>
  )
}

export default Login