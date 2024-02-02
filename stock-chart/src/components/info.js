import React, { useContext } from "react";
import Card from "./card";
import DayNightContext from "../context/dayNightContext";

const Info = ({details}) => {
    const { darkMode } = useContext(DayNightContext)
    const information = {
        name: "Name",
        country: "Country",
        currency: "Currency",
        exchange: "Exchange",
        ipo: "IPO Date",
        marketCapitalization: "Market Capitalization",
        finnhubIndustry: "Industry",
    }
    const convertToBillion = (number) => {
        return(number/1000).toFixed(2)
    }
    return (
    <Card>
        <ul className={`w-full h-full flex flex-col justify-between divide-y-1 
        ${darkMode ? "divide-gray-800" : null}
        `}>
            {Object.keys(information).map((item) => {
                return (
                    <li 
                    key={item} className="flex-1 flex justify-between items-center"
                    >
                        <span>{information[item]}</span>
                        <span>
                            {item === "marketCapitalization" ? `${convertToBillion(details[item])}B`
                            : details[item]}
                        </span>
                    </li>
                )
            })}
        </ul>
    </Card>
    )
}

export default Info; 