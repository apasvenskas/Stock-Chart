import React, { useContext, useState } from "react";
// import { mockSearchResults } from "../const/mock"
import { BackspaceIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import Results from "./Results";
import DayNightContext from "../context/dayNightContext";
import { SearchSymbols } from "../api/stockApi";

const Search = () => {
    const [input, setInput] = useState("");
    const [bestMatches, setBestMatches] = useState([])
    const { darkMode } = useContext(DayNightContext)

    function clear(){
        setInput("");
        setBestMatches([]);
    };

    async function updateBestMatches(){
        try{
            if(input){
                const searchResults = await SearchSymbols(input);
                const result = searchResults.result;
                setBestMatches(result);
            }
        } 
        catch(error){
            setBestMatches([]);
            console.log(error);
        }
    }
    return <div 
    className={`flex item-center 
    mt-2 
    mb-3
    border-2 
    rounded-md 
    relative z-50 w-96 
    bg-white
    border-neutral-200 
    ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-800"}
    `}
    >
        <input type="text" 
            value={input} 
            className={`w-full px-4 focus:outline-none rounded-md ${darkMode ? "bg-gray-900" : null}`} 
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
                <BackspaceIcon className="h-4 w-4 fill-gray-200" />
            </button>
            )}
            <button 
                onClick={updateBestMatches} 
                className="h-6 w-8 bg-green-800 rounded-md flex justify-center items-center m-1 p-2"
                >
                <MagnifyingGlassCircleIcon className="h-3 w-3 fill-gray-400"/>
            </button>
            {input && bestMatches.length > 0 ? <Results results={bestMatches}/> : null}
    </div>
}

export default Search; 