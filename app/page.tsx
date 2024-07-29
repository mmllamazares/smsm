// import Image from "next/image";
// import Map from "../components/Map";

'use client'
import Button from '@/components/Button/Button';
import NotificationPanel from '@/components/NotificationPanel/NotificationPanel';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Map = dynamic(() => import('@/components/Map'), {ssr: false})

export default function Home() {
  const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}

const [isActive, setIsActive] = useState(true);

  return (
    <>
    <div className="min-h-screen w-screen relative">
      
      <Button handleClick={()=> {setIsActive(!isActive)}}/>
      <NotificationPanel isActive={isActive} handleClick={()=> {setIsActive(!isActive)}} />
      <Map position={[22.416724, -83.700273]} zoom={9.3}/>
      
    </div>
    </>
  );
}