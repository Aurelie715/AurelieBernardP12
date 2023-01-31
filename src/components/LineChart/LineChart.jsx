import React, { PureComponent } from "react";
import styles from './LineChart.module.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea, Rectangle } from "recharts";

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
  const CustomizedCursor = (props) => {
    const {width, height, points } = props;
    return <Rectangle fill="black" stroke="black" x={points[0]} width={width} height={height*2} />;
  }
  return (
    <>
    <h2 className={styles.title}>Durée moyenne des sessions</h2>
    <ResponsiveContainer width="100%" height="90%">
      <LineChart
        data={data}
        margin={{
          top: 40,
          right: 0,
          left: 5,
          bottom: 0,
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
        <Tooltip cursor={<CustomizedCursor />} />
        <ReferenceArea x1={5} x2={6}/>
        <Line type="monotone" dataKey="sessionsLenght" stroke="url(#colorUv)" strokeWidth={3} strokeOpacity="0.5" dot="" />
      </LineChart>
    </ResponsiveContainer></>
  );
}
