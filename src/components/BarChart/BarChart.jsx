import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './BarChart.module.scss'

const data = [
  {
    day: '1',
    kilogram: 80,
    calories: 240,
   
  },
  {
    day: '2',
    kilogram: 60,
    calories: 220,
    
  },
  {
    day: '3',
    kilogram: 70,
    calories: 280,
   
  },
];

export default function BarChartComponent() {
  const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          <p className={styles['tooltip-text']}>{`${payload[0].value}kg`}</p>
          <p className={styles['tooltip-text']}>{`${payload[0].payload.calories}kcal`}</p>
        </div>
      )
      
    }
    return null;
  }
    return (
      <>
        <div className={styles['header-barchart']}>
          <h2 className={styles['barchart-title']}>Activité quotidienne</h2>
          <div className={styles['barchart-legend']}>
            <p><img src="/black-bullet.svg" alt="" className={styles['black-bullet']}/>Poids (Kg)</p>
            <p><img src="/red-bullet.svg" alt="" className={styles['red-bullet']}/>Calories brûlées (kCal)</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="65%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 30,
              bottom: 5,
            }}
            barGap={8}
          >
            <CartesianGrid strokeDasharray="2 2" vertical={false}/>
            <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} />
            <YAxis yAxisId="right" orientation="right"  tickCount="3" tickLine={false} tick={{fontSize: 14}} dx={15} axisLine={false}/>
            <YAxis yAxisId="left" orientation="left" hide={true}/>
            <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }}/>
            <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[8, 8, 0, 0]} barSize={7}/>
            <Bar yAxisId="left" dataKey="calories" fill="#E60000" radius={[8, 8, 0, 0]} barSize={7}/>
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
