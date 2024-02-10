import React, { useContext, useState } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";
import DayNightContext from "../context/dayNightContext";

function Icon(){
    const {darkMode, setDarkMode} = useContext(DayNightContext); 
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    return (<button className={
        `rounded-lg border-1 border-neutral-400 p-2 absolute right-8 top-10 xl:right-32 shadow-lg 
        ${darkMode ? "shadow-gray-100" : null}`
    }
    onClick={toggleDarkMode}
    >
        <MoonIcon className={
            `h-5 w-85cursor-pointer stroke-2 fill-none stroke-green-800
            ${darkMode ? "fill-yellow-400 stroke-yellow-400" : "fill-none stroke-neutral-400"}
            `} 
            />
    </button>
    )
}

export default Icon;