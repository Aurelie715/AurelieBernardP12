import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    day: '1',
    kilogram: 80,
    calories: 240,
   
  },
  {
    day: '2',
    kilogram: 80,
    calories: 220,
    
  },
  {
    day: '3',
    kilogram: 80,
    calories: 280,
   
  },
];

export default function BarChartComponent() {
    return (
        <BarChart
          width={700}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false}/>
          <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} />
          <YAxis dataKey="kilogram" orientation="right" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" tickLine={false} tick={{fontSize: 14}} dx={15} axisLine={false}/>
          <YAxis dataKey="calories" type="number" domain={[0, "dataMax + 50"]}/>
          <Tooltip/>
          <Bar dataKey="kilogram" fill="#E60000" radius={[8, 8, 0, 0]} barSize={7}/>
          <Bar dataKey="calories" fill="#282D30" radius={[8, 8, 0, 0]} barSize={7}/>
          
        </BarChart>
    );
  }
