import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Home.module.scss'
import BarChart from '../../components/BarChart/BarChart';
import UserDatas from '../../data/userData.json';
import LineChart from '../../components/LineChart/LineChart';
import RadarChart from '../../components/RadarChart/RadarChart';
import PieChart from '../../components/PieChart/PieChart';
import UserMainData from '../../models/UserMainData';

export default function Home() {
  const { id } = useParams();
  const user = UserDatas.userMainData.find((userMainData) => userMainData.id === parseInt(id));
  if (user === undefined) {
    return <></>;
  }
  const userMainData = new UserMainData(user);
  return (
    
    <>
    <p className={styles['greeting-text']}>Bonjour <em className={styles['firstname-text']}>{userMainData.firstName}</em></p>
    <p className={styles['congratulation-text']}>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
    <div className={styles['barchart-container']}>
      <BarChart />
    </div>
      <div className={styles['charts-container']}>
        <div className={styles['container-linechart']}>
        <LineChart />
        </div>
        <div className={styles['container-radarchart']}>
          <RadarChart />
        </div>
        <div className={styles['container-piechart']}>
        <PieChart />
        </div>
      </div>
    </>
  );
}
