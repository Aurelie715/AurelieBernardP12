import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styles from './PieChart.module.scss'

const whiteCircle = [
    {
        name: "value: 100"
    }
]

export default function PieChartComponent({score}) {
    const data = [{score}];
    if (score < 100) {
        data.push({score : 100 - score});
    }
    return (
        <>
            <h2 className={styles.title}>Score</h2>
            <ResponsiveContainer className={styles['piechart-container']} width="100%" height="100%">
                <PieChart>
                {/* <Pie
                        data={whiteCircle}
                        dataKey="value"
                        outerRadius={90}
                        fill="#82ca9d"
                    /> */}
                    <Pie
                        data={data}
                        innerRadius={70}
                        outerRadius={80}
                        dataKey="score"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={index === 0 ? "#ff0000" : "#fbfbfb"}
                                stroke={index === 0 ? null : "#fbfbfb"}
                                cornerRadius={index === 0 ? 10 : null}
                            />
                        ))}
                    </Pie>
                   
                </PieChart>
            </ResponsiveContainer>
            <div className={styles['container-score']}>
                <p className={styles['score-percentage']}>{score}%</p>
                <p className={styles['score-description']}>de votre objectif</p>
            </div>
        </>
    );
} 