"use client";
import { MdClose, MdLocationOn, MdOutlineWarning } from "react-icons/md";
import { FcCollapse } from "react-icons/fc";
import { useState } from "react";
import { FailDetected } from "@/utils/types.dev";

const Notification = (fail: FailDetected) => {
  const [showDetails, setShowDetails] = useState(false);
  const { id, name, location, cause, dateDetection, priority } = fail;
  return (
    <div
      className="box-border flex flex-col border-2 shadow-md m-4 px-4 py-2 border-blanco rounded h-auto font-Roboto-Regular text-white cursor-pointer select-none"
      onClick={(e) => {
        e.stopPropagation();
        setShowDetails(!showDetails);
      }}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center w-4/5">
          <MdOutlineWarning className="text-2xl text-primary-yellow" />
          <p className="w-full">
            {id} {name}
          </p>
        </div>
        <div className="flex justify-between items-center w-1/5">
          <button
            className={showDetails ? "text-white" : "text-white rotate-180"}
          >
            <FcCollapse />
          </button>
          <button
            className="flex justify-center items-center place-content-end bg-red-500 hover:bg-white rounded w-6 h-6 text-blanco hover:text-red-500"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <MdClose />
          </button>
        </div>
      </div>
      {
        // Fail's details
        showDetails && (
          <div className="p-3 w-full h-full">
            <h2 className="font-bold text-xl">Falla</h2>
            <hr />
            <div className="flex justify-between pt-2">
              <p>Ubicacion: {location}</p>
              <button
                className="flex justify-center items-center hover:bg-primary-blue rounded w-6 h-6 duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <MdLocationOn />
              </button>
            </div>
            <p>Causa: {cause}</p>
            <p>Fecha: {dateDetection}</p>
            <p>Prioridad: {priority}</p>
          </div>
        )
      }
    </div>
  );
};

export default Notification;
