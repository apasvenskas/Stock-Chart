import React, { useState } from "react";
import { mockHistoricalData } from "../const/mock";
import { convertUnixToDate } from "../methodes/date";
import Card from "./card";
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

function Chart() {
  const [data, setDate] = useState(mockHistoricalData);
  const [filter, setFilter] = useState("1W");

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
          <Tooltip />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default Chart;
