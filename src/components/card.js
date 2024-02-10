import React, { useContext } from "react";
import DayNightContext from "../context/dayNightContext";

const Card = ({ children }) => {
  const { darkMode } = useContext(DayNightContext)
  return (
    <div className={`
    w-full h-full rounded-md relative
    p-8 border-2
    ${darkMode ? "bg-zinc-900 border-green-900" : " bg-white border-neutral-200"}
    `}>
      {children}
    </div>
  );
};

export default Card;
