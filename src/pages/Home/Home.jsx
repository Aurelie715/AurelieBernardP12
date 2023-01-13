import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Home.module.scss'
import BarChart from '../../components/BarChart/BarChart';
import UserDatas from '../../data/userData.json';
import LineChart from '../../components/LineChart/LineChart';
import RadarChart from '../../components/RadarChart/RadarChart';
import PieChart from '../../components/PieChart/PieChart';

export default function Home() {
  const { id } = useParams();
  const user = UserDatas.userMainData.find((userMainData) => userMainData.id === parseInt(id));
  if (user === undefined) {
    return <></>;
  }
  return (
    <>
    <BarChart />
      <div className={styles['charts-container']}>
        <LineChart />
        <div className={styles['container-radarchart']}>
          <RadarChart />
        </div>
        <PieChart />
      </div>
    </>
  );
}
