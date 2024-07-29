import { MdNotifications } from "react-icons/md"

const NotificationButton = () => {
  return (
    <button className="top-16 right-3 z-10 absolute flex justify-center items-center border-2 border-primary-blue bg-blanco shadow-md w-10 h-10">
      <MdNotifications className="" />
    </button>
  )
}

export default NotificationButton
