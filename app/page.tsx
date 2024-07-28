<<<<<<< HEAD
import Map from "./components/Map"
=======
// import Image from "next/image";
// import Map from "../components/Map";


import Button from '@/components/Button/Button';
import NotificationPanel from '@/components/NotificationPanel/NotificationPanel';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), {ssr: false})
>>>>>>> mmllamazares

export default function Home() {
  const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}
  return (
<<<<<<< HEAD
    <div className="flex flex-col justify-between items-center min-h-screen">
      <Map position={[22.416724, -83.700273]} zoom={13} />
    </div>
  )
}
=======
    <>
    <div className="min-h-screen w-screen relative">
      
      <Button/>
      <NotificationPanel/>
      <Map position={[22.416724, -83.700273]} zoom={9.3}/>
      
      
    </div>
    </>
  );
}
>>>>>>> mmllamazares
