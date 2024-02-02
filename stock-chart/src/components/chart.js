import React, { useState, useContext, useEffect } from "react";
import { mockHistoricalData } from "../const/mock";
import { convertUnixToDate, convertDateToUnix, createDate } from "../methodes/date";
import { fetchHistoricalData } from "../api/stockApi";
import Card from "./card";
import DayNightContext from "../context/dayNightContext";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartConfig } from "../const/config";
import ChartFilter from "./chartFilter";
import StockContext from "../context/stockContext";

function Chart() {
  const [data, setDate] = useState(mockHistoricalData);
  const [filter, setFilter] = useState("1W");
  const { darkMode } = useContext(DayNightContext)
  const { stockSymbol } = useContext(StockContext)

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];
      
    };
    const updateChartData = async () => {};
  }, [stockSymbol, filter])
  const formatData = () => {
    //will need to convert data to object
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixToDate(data.t[index]),
      };
    });
  };
  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
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
        <AreaChart data={formatData(data)}>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#708238"
            fillOpacity={1}
            strokeWidth={2.5}
            fill="url(#chartColor)"
          />
          <Tooltip 
            contentStyle={darkMode ? {backgroundColor: "#111827"} : null}
            itemStyle={darkMode ? {color: "#818cf8"} : null}
          />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default Chart;
