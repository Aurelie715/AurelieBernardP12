import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { score: 12 },
  { score: 88 }
];

export default function PieChartComponent() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={data}
                    innerRadius={70}
                    outerRadius={80}
                    paddingAngle={5}
                    startAngle={90}
                    dataKey="score"
                >
                    {data.map((entry, index) =>
                        index === 0 ? (
                            <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
                        ) : (
                            <Cell key={`cell-${index}`} fill="#fbfbfb" stroke="#fbfbfb"/>
                        )
                    )}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
        
    );
} 