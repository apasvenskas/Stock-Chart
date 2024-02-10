import React, { useState, useContext, useEffect } from "react";
import ChartFilter from "./chartFilter";
import Card from "./card";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import DayNightContext from "../context/dayNightContext";
import { chartConfig } from "../const/config";
import StockContext from "../context/stockContext";
import { fetchHistoricalData } from "../api/stockApi";
import { convertUnixToDate, convertDateToUnix, createDate } from "../methodes/date";

function Chart() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("1W");
  const { darkMode } = useContext(DayNightContext)
  const { stockSymbol } = useContext(StockContext)

  const formatData = (data) => {
    //will need to convert data to object
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixToDate(data.t[index]),
      };
    });
  };

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];
      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years)
      const startTimestampUnix = convertDateToUnix(startDate)
      const endTimeStampUnix = convertDateToUnix(endDate)
      return { startTimestampUnix, endTimeStampUnix };
    };
    
    const updateChartData = async () => {
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;
        const result = await fetchHistoricalData(
          stockSymbol,
          resolution,
          startTimestampUnix,
          endTimestampUnix
        );
        setData(formatData(result));
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();
  }, [stockSymbol, filter]);

  
  return (
    <Card>
      <ul className=" h-full flex absolute top-1 right-2 z-40">
        {Object.keys(chartConfig).map((item) => {
            return (
                <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
            )
        })}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fill="url(#chartColor)"
            fillOpacity={1}
            strokeWidth={0.5}
          />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};


export default Chart;
