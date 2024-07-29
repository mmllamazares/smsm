import React from 'react'
import Notification from '../Notification/Notification'
import { MdNotifications, MdClose } from "react-icons/md"
import { fails } from '@/utils/fails'

const NotificationPanel = () => {
  return (
    <div className='right-0 z-20 absolute flex flex-col bg-secondary-blue w-96 h-screen'>
      <div className='relative h-screen'>
        <h2 className='flex justify-center items-center m-6 font-Roboto-Bold text-2xl text-blanco text-center'><MdNotifications /> Notificaciones</h2>
        <div className='h-[calc(100vh-160px)] overflow-y-scroll'>
          {
            fails.map((fail,i) => (
              <Notification key={i} id={fail.id} name={fail.name} location={fail.location} cause={fail.cause} dateDetection={fail.dateDetection} priority={fail.priority} />
            ))
          }
        </div>
        <div className='right-0 bottom-0 absolute flex justify-between m-4 w-[92%]'>
          <button className='w-12 h-12 font-Roboto-Bold text-blanco'><MdClose size={"2em"} /></button>
          <button className='w-32 h-12 font-Roboto-Bold text-blanco'>Limpiar Todo</button>
        </div>
      </div>

    </div>
  )
}

export default NotificationPanel