import { MdNotifications } from "react-icons/md"

const Button = ({ handleClick, cantNotifications }: { handleClick: React.MouseEventHandler<HTMLElement>, cantNotifications: number }) => {
  return (
    <div className='right-0 z-10 absolute flex justify-center items-center w-10 h-10'>
      {
        cantNotifications !== 0 && <span className="z-20 flex justify-center items-center bg-primary-blue rounded-full w-5 h-5 font-bold text-[11px] text-white leading-normal select-none">{cantNotifications}</span>
      }
      <button onClick={handleClick} className="top-0 right-0 z-10 absolute flex justify-center items-center border-2 border-primary-blue bg-blanco shadow-md m-4 w-10 h-10 text-primary-blue">
        <MdNotifications />
      </button>
    </div>
  )
}

export default Button