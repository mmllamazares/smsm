// import Image from "next/image";
// import Map from "../components/Map";

'use client'
import Button from '@/components/Button/Button'
import NotificationPanel from '@/components/NotificationPanel/NotificationPanel'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function Home() {
  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
  }

  const [isActive, setIsActive] = useState<boolean>(true)

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation()
    setIsActive(!isActive)
  }

  return (
    <>
      <div className="relative w-screen min-h-screen">

        <Button handleClick={handleClick} />
        <NotificationPanel isActive={isActive} handleClick={handleClick} />
        <Map position={[22.416724, -83.700273]} zoom={9.3} />

      </div>
    </>
  )
}
