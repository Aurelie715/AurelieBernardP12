import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      day: "L",
      sessionsLenght: 30,
    },
    {
        day: "M",
        sessionsLenght: 23,
    },
    {
        day: "M",
        sessionsLenght: 45,
    },
    {
        day: "J",
        sessionsLenght: 50,
    },
    {
        day: "V",
        sessionsLenght: 0,
    },
    {
        day: "S",
        sessionsLenght: 0,
    },
    {
        day: "D",
        sessionsLenght: 60,
    },
  ];

export default function LineChartComponent() {
    return(
        <LineChart
      width={258}
      height={263}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="sessionsLenght"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
    );
}