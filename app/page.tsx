"use client";
import Button from "@/components/Button/Button";
import NotificationPanel from "@/components/NotificationPanel/NotificationPanel";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard/NotificationCard";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid #fff",
  };

  const [isActive, setIsActive] = useState<boolean>(true);
  const [cantNotifications, setCantNotifications] = useState(10);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    setIsActive(!isActive);
  }

  useEffect(() => {
    if (!isActive) {
      setCantNotifications(0);
    }
  }, [isActive]);

  return (
    <>
      <div className="relative w-screen min-h-screen">
        <Button
          handleClick={handleClick}
          cantNotifications={cantNotifications}
        />
        {/* Mostrar listado de notificaciones entrantes */}
        <div
          className="absolute z-10 h-[85vh] w-80 right-4 bottom-0 overflow-y-scroll flex flex-col"
        >
          <NotificationCard
            type="success"
            description="lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd"
          />
          <NotificationCard
            type="error"
            description="lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd"
          />
          <NotificationCard
            type="info"
            description="lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd"
          />
          <NotificationCard
            type="warning"
            description="lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd"
          />
          <NotificationCard
            type="success"
            description="lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd"
          />
          <NotificationCard
            type="error"
            description="lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd"
          />
          <NotificationCard
            type="warning"
            description="lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd"
          />
          <NotificationCard
            type="error"
            description="lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd"
          />
          <NotificationCard
            type="success"
            description="lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd lorem ipsum dolor hema lkwhd djneijenjkd"
          />
        </div>
        <NotificationPanel isActive={isActive} handleClick={handleClick} />
        <Map position={[22.416724, -83.700273]} zoom={9.3} />
      </div>
    </>
  );
}
