import React from "react";
import { MoonIcon } from "@heroicons/react/24/solid";

function Icon(){
    return <button className=
    "rounded-lg border-1 border-neutral-400 p-2 absolute right-8 top-10 xl:right-32 shadow-lg">
        <MoonIcon className="h-5 w-85cursor-pointer stroke-2 fill-none stroke-green-800"/>
    </button>
}

export default Icon;