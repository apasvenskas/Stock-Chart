import React, { useContext, useEffect, useState } from "react";
import Header from "./header";
import Info from "./info";
import Overview from "./Overview";
import Chart from "./chart";
import DayNightContext from "../context/dayNightContext";
import StockContext from "../context/stockContext";
import { fetchQuote, fetchStockDetails } from "../api/stockApi";

const Dashboard = () => {
    const { darkMode } = useContext(DayNightContext)
    const { stockSymbol } = useContext(StockContext)

    const [stockDetails, setStockDetails] = useState({});
    const [quote, setQoute] = useState({}); 

    useEffect(() => {
        const updateStockDetails = async () => {
            try {
                const result = await fetchStockDetails(stockSymbol);
                setStockDetails(result)
            }
            catch(error){
                setStockDetails({})
                console.log(error)
            }
        }
        const updateStockOverview = async () => {
            try {
                const result = await fetchQuote(stockSymbol);
                setQoute(result);
            } catch (error) {
                setQoute({});
                console.log(error);
            }
        }
        updateStockDetails();
        updateStockOverview();
    }, [stockSymbol])

    return <div className={
        `
        grid 
        grid-cols-1 
        md:grid-cols-1 
        x1:grid-cols-3 
        grid-rows-8
        md:grid-rows-7 
        xl:grid-rows-5 
        auto-rows-fr 
        gap-6
        p-11
        font-space-mono
        ${darkMode ? "bg-gray-900 text-gray-300" : " bg-slate-300"}
        `
    }
    >
        <div className="col-span-1 md:col-span-2 lrg:col-span-3 row-span-1">
            <Header name={stockDetails.name}/>
        </div>
        <div className="md:col-span-1 row-span-4">
            <Chart />
        </div>
        <div className="col-span-1">
            <Overview 
                symbol={stockSymbol} 
                price={quote.pc} 
                change={quote.d} 
                changePercent={quote.dp}
                currency={stockDetails.currency}
            />
        </div>
        <div className="row-span-5 lrg:row-span-1">
            <Info details={stockDetails} />
        </div>
    </div>
}

export default Dashboard;