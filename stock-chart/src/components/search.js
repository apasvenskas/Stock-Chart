import React, { useState } from "react";
import { mockSearchResults } from "../const/mock"
import { BackspaceIcon, SearchIcon } from '@heroicons/react/24/solid'

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
    return <div className="flex item-center 
    my-4 
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
            <button onClick={clear}>
                <BackspaceIcon className="h-4 w-4 fill-gray-500" />
            </button>
            )}
    </div>
}

export default Search; 