// import Image from "next/image";
// import Map from "../components/Map";


import Button from '@/components/Button/MenuButton'
import NotificationPanel from '@/components/NotificationPanel/NotificationPanel'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function Home() {
  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
  }
  return (
    <>
      <div className="relative w-screen min-h-screen">
        <NotificationPanel />
        <Map position={[22.416724, -83.700273]} zoom={9.3} />
      </div>
    </>
  )
}
