import React, { useState } from "react";
import { mockSearchResults } from "../const/mock"
import { BackspaceIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import Results from "./Results";

const Search = () => {
    const [input, setInput] = useState("");
    const [bestMatches, setBestMatches] = useState(mockSearchResults.result)

    function clear(){
        setInput("");
        setBestMatches([]);
    };

    function updateBestMatches(){
        setBestMatches(mockSearchResults.result) // will have to adjust it later use fetch to get from API
    }
    return <div 
    className="flex item-center 
    mt-2 
    mb-3
    border-2 
    rounded-md 
    relative z-50 w-96 
    bg-white
    border-neutral-200"
    >
        <input type="text" 
            value={input} 
            className="w-full px-4 focus:outline-none rounded-md" 
            placeholder="Search stock..."
            onChange={(event) => {
                setInput(event.target.value);
            }}
            onKeyPress={(event) => {
                if(event.key === 'Enter'){
                    updateBestMatches();
                }
            }}
            />
            {input && (
            <button onClick={clear} className="m-1">
                <BackspaceIcon className="h-4 w-4 fill-gray-500" />
            </button>
            )}
            <button 
                onClick={updateBestMatches} 
                className="h-6 w-8 bg-green-800 rounded-md flex justify-center items-center m-1 p-2"
                >
                <MagnifyingGlassCircleIcon className="h-3 w-3 fill-gray-100"/>
            </button>
            {input && bestMatches.length > 0 ? <Results results={bestMatches}/> : null}
    </div>
}

export default Search; 