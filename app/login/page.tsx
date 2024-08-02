import Image from 'next/image'
import Logo from "../../public/Logo.svg";

const Login = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div className='flex flex-col justify-center items-center gap-3 p-10 w-80 font-Roboto-Regular'>
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