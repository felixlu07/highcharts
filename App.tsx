import React, { useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const data = [
  {
    "Customer Name": "GREEN ENERGY INVESTMENT HOLDING PTE LTD",
    "Total HBLs M-6": 0,
    "Total HBLs M-5": 0,
    "Total HBLs M-4": 1,
    "Total HBLs M-3": 0,
    "Total HBLs M-2": 2,
    "Total HBLs M-1": 0,
    "Total HBLs MTD": 1,
    "Total Profit M-6": 0.00,
    "Total Profit M-5": 0.00,
    "Total Profit M-4": 25.00,
    "Total Profit M-3": 0.00,
    "Total Profit M-2": 293.81,
    "Total Profit M-1": 0.00,
    "Total Profit MTD": 24463.12
  },
  // ... rest of the data
];

const options: Highcharts.Options = {
  title: {
    text: 'My chart',
  },
  xAxis: {
    categories: data.map(item => item['Customer Name']),
  },
  series: [
    {
      name: 'Total HBLs MTD',
      type: 'column',
      data: data.map(item => item['Total HBLs MTD']),
    },
    {
      name: 'Total Profit MTD',
      type: 'line',
      data: data.map(item => item['Total Profit MTD']),
    },
  ],
};

const App = () => {
  const chartComponentRef = useRef(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
};

export default App;
