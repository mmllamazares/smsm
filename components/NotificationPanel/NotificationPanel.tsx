import React from 'react'
import Notification from '../Notification/Notification'

const NotificationPanel = () => {
  return (
    <div className='absolute right-0 h-screen w-96 bg-secondary-blue flex flex-col z-20'>
        <div className='relative h-screen'>
            <h2 className='text-blanco text-2xl font-Roboto-Bold text-center m-6'>Notificaciones</h2>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <div className='absolute w-[92%] bottom-0 right-0 flex justify-between m-4'>
                <button className='w-12 h-12 text-blanco font-Roboto-Bold'>X</button>
                <button className='h-12 w-32 text-blanco font-Roboto-Bold'>Limpiar Todo</button>
            </div>
        </div>
        
    </div>
  )
}

export default NotificationPanel