import React from "react";
import { mockCompanyDetails } from "../const/mock";
import Header from "./header";
import Info from "./info";
import Overview from "./Overview";
import Chart from "./chart";

const Dashboard = () => {
    return <div className="
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
    bg-slate-300
    font-space-mono"
    >
        <div className="col-span-1 md:col-span-2 lrg:col-span-3 row-span-1">
            <Header name={mockCompanyDetails.name}/>
        </div>
        <div className="md:col-span-1 row-span-4">
            <Chart />
        </div>
        <div className="col-span-1">
            <Overview 
                symbol={mockCompanyDetails.ticker} 
                price={300} 
                change={30} 
                changePercent={10.0}
                currency={"USD"}
            />
        </div>
        <div className="row-span-5 lrg:row-span-1">
            <Info details={mockCompanyDetails} />
        </div>
    </div>
}

export default Dashboard;