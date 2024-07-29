import Image from "next/image"
import Link from "next/link"
import Button from "../Button/MenuButton"

const NavBar = () => {
  return (
    <nav className="w-full h-16 flex justify-between items-center px-3 fixed z-10">
      <Link href="/" className=''>
        <Image src="/Logo.svg" alt='logo' width={60} height={60} className="rounded-full" />
      </Link>
      <Button />
    </nav>
  )
}

export default NavBar
