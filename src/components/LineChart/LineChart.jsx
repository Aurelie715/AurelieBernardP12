import React, { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 5,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity={0.2} />
            <stop offset="50%" stopColor="white" stopOpacity={0.5} />
            <stop offset="70%" stopColor="white" stopOpacity={1} />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" tickLine={false} tick={{ opacity: 0.5 }} stroke="white" axisLine={false} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sessionsLenght" stroke="url(#colorUv)" strokeWidth={3} strokeOpacity="0.5" dot="" />
      </LineChart>
    </ResponsiveContainer>
  );
}
