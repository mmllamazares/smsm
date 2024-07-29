import Link from "next/link"

const NotFound = () => {
  return (
    <div className="z-20 flex flex-col justify-center items-center bg-primary-blue h-screen">
      <h1 className="mb-2 text-2xl text-white">404 Page not found</h1>
      <Link href="/" className="flex justify-center items-center border-2 border-primary-blue bg-white p-2 border-solid rounded hover:scale-110 text-primary-blue duration-300">Volver a inicio</Link>
    </div>
  )
}

export default NotFound