import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    subject: "cardio",
    value: 80,
  },
  {
    subject: "energy",
    value: 120,
  },
  {
    subject: "endurance",
    value: 140,
  },
  {
    subject: "strength",
    value: 50,
  },
  {
    subject: "speed",
    value: 200,
  },
  {
    subject: "intensity",
    value: 90,
  }
];

export default function RadarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <RadarChart
      cx="50%"
      cy="50%"
      outerRadius="65%"
      data={data}
    >
      <PolarGrid radialLines={false}/>
      <PolarAngleAxis dataKey="subject" stroke='white' tickLine={false} axisLine={false} tick={{ fontSize: 10 }}/>
      <Radar
        name="Mike"
        dataKey="value"
        stroke="#FF0101"
        fill="#FF0101"
        fillOpacity={0.7}
      />
    </RadarChart>
    </ResponsiveContainer>
  );
}