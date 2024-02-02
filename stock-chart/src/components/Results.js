import React, { useContext } from "react";
import DayNightContext from "../context/dayNightContext";

const Results = ({ results }) => {
  const { darkMode } = useContext(DayNightContext)
  return (
    <ul
      className="absolute top-12 
    border-2 
    w-full 
    rounded-md 
    h-64 
    overflow-y-scroll
    bg-white
    border-neutral-200 
    custom-scrollbar"
    >
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-indigo-200
            ${darkMode ? "bg-gray-900 border-gray-800 hover:bg-green-900 custom-scrollbar-dark" : "hover:bg-green-500 bg-white border-neutral-200"}
            `}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Results;
