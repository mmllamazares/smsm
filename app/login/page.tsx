import Image from 'next/image'
import Logo from "../../public/Logo.svg";

const Login = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div className='flex flex-col justify-center items-center gap-3 p-10 w-80 font-Roboto-Regular'>
            <Image src={Logo} alt='Logo' width={250} height={250}/>
            {/* <div className='flex flex-col items-start gap-3'>
                <label htmlFor="user">Usuario:</label>
                <input className='border-2 border-secondary-light-blue p-2 accent-primary-blue' id='user' type="text" />
            </div>
            <div className='flex flex-col items-start gap-3'>
                <label htmlFor="password">Contraseña:</label>
                <input className='border-2 border-secondary-light-blue p-2 accent-primary-blue' id='password' type="password" />
            </div> */}

<form className="max-w-sm mx-auto font-Roboto-Regular">
  <div className="mb-5">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario:</label>
    <input type="email" id="email" className="bg-gray-50 border border-secondary-light-blue text-gray-900 text-sm  focus:ring-primary-blue focus:border-primary-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-blue dark:focus:border-primary-blue" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña:</label>
    <input type="password" id="password" className="bg-gray-50 border border-secondary-light-blue text-gray-900 text-sm  focus:ring-primary-blue focus:border-primary-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-blue dark:focus:border-primary-blue" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-secondary-light-blue bg-gray-50 focus:ring-3 focus:ring-primary-blue checked:bg-primary-blue dark:bg-gray-700 dark:border-gris dark:focus:ring-primary-blue dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-primary-blue hover:bg-secondary-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Inicio de sesión</button>
</form>
        </div>




    </div>
  )
}

export default Login