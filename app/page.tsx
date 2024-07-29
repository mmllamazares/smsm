// import Image from "next/image";
// import Map from "../components/Map";


import Button from '@/components/Button/Button';
import NotificationPanel from '@/components/NotificationPanel/NotificationPanel';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), {ssr: false})

export default function Home() {
  const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}
  return (
    <>
    <div className="min-h-screen w-screen relative">
      
      <Button/>
      <NotificationPanel/>
      <Map position={[22.416724, -83.700273]} zoom={9.3}/>
      
      
    </div>
    </>
  );
}