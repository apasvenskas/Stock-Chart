// export const chartConfig = {
//     // "1H": {hours: 1 , days: 0, weeks: 0, months: 0, years: 0, resolustion: "1"},
//     "1D": { days: 1, weeks: 0, months: 0, years: 0, resolustion: "5"},
//     //"3D": {hours: 0 , days: 3, weeks: 0, months: 0, years: 0, resolustion: "5"},
//     "1W": { days: 0, weeks: 1, months: 0, years: 0, resolustion: "15"},
//     "1M": { days: 0, weeks: 0, months: 1, years: 0, resolustion: "60"},
//     "1y": { days: 0, weeks: 0, months: 0, years: 1, resolustion: "D"},
// }

export const chartConfig = {
    "1D": { resolution: "1", days: 1, weeks: 0, months: 0, years: 0 },
    "1W": { resolution: "15", days: 0, weeks: 1, months: 0, years: 0 },
    "1M": { resolution: "60", days: 0, weeks: 0, months: 1, years: 0 },
    "1Y": { resolution: "D", days: 0, weeks: 0, months: 0, years: 1 },
  };