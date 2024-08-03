"use client";
import { FaCheckCircle } from "react-icons/fa";
import { PropsNotificationCard } from "../../utils/types.dev";
import { MdError, MdInfo, MdOutlineWarning } from "react-icons/md";
import { useEffect, useState } from "react";

const NotificationCard = ({
  type,
  description = "",
}: PropsNotificationCard) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 3000);
  }, []);

  return (
    show && (
      <div
        className={`flex h-16 w-80 drop-shadow-xl z-20 bg-white p-2 mt-2 mb-2 border-l-4 ${
          type === "success"
            ? "border-l-success"
            : type === "error"
            ? "border-l-error"
            : type === "info"
            ? "border-l-secondary-blue"
            : "border-l-primary-yellow"
        } outline-none box-border rounded`}
      >
        <div className="flex justify-center items-center">
          {type === "success" && (
            <FaCheckCircle className="h-6 w-auto text-success" />
          )}
          {type === "error" && <MdError className="h-6 w-auto text-error" />}
          {type === "info" && (
            <MdInfo className="h-6 w-auto text-secondary-blue" />
          )}
          {type === "warning" && (
            <MdOutlineWarning className="h-6 w-auto text-primary-yellow" />
          )}
        </div>
        <div className="h-full w-64 ml-2 box-border">
          <h2 className="capitalize font-bold">{type}</h2>
          <p className="line-clamp-1">{description}</p>
        </div>
      </div>
    )
  );
};

export default NotificationCard;
