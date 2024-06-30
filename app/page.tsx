// import Image from "next/image";
// import Map from "../components/Map";

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), {ssr: false})

export default function Home() {
  return (
    <>
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Map position={[22.416724, -83.700273]} zoom={9.3}/>
    </div>
    </>
  );
}
