import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styles from './Home.module.scss'
import BarChart from '../../components/BarChart/BarChart';
// import UserDatas from '../../data/userData.json';
import LineChart from '../../components/LineChart/LineChart';
import RadarChart from '../../components/RadarChart/RadarChart';
import PieChart from '../../components/PieChart/PieChart';
import Card from '../../components/Card/Card';
import { getUser, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../services/Service';


export default function Home() {
  const { id } = useParams();
  // // for API
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

  // //for mock data
  // // const user = UserDatas.userMainData.find((userMainData) => userMainData.id === parseInt(id));

  // // for API
  useEffect( () => {
    getUser(id).then((user) => setUser(user));
    getUserPerformance(id).then((performance) => setPerformance(performance));
    getUserAverageSessions(id).then((averageSessions) => setAverageSessions(averageSessions));
    getUserActivity(id).then((activity) => setActivity(activity));
    
  }, [id]);
  
  if (user === null || activity === null || averageSessions === null || performance === null) {
    return <></>;
  }

 //for mock data
  // const userMainData = new UserMainData(user);
  return (
    <>
    <div>
        <p className={styles['greeting-text']}>Bonjour <em className={styles['firstname-text']}>{user.firstName}</em></p>
        <p className={styles['congratulation-text']}>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
    </div>
    <div className={styles.container}>
      <div className={styles['container-left']}>
        <div className={styles['barchart-container']}>
          <BarChart data={activity.sessions}/>
        </div>
        <div className={styles['charts-container']}>
          <div className={styles['container-linechart']}>
          <LineChart data={averageSessions.sessions}/>
          </div>
          <div className={styles['container-radarchart']}>
            <RadarChart data={performance}/>
          </div>
          <div className={styles['container-piechart']}>
            <PieChart score={user.realScore*100 } />
          </div>
        </div>
      </div>
      <div className={styles['container-right']}>
        <Card icon="fire" color="rgba(255, 0, 0, 0.07)" value={`${(user.calorieCount/1000).toFixed(3).toString().replace('.', ',')}kCal`} description="Calories"/>
        <Card icon="meat" color="rgba(74, 184, 255, 0.1)" value={`${user.proteinCount}g`} description="Proteines"/>
        <Card icon="apple" color="rgba(249,206,35,0.1)" value={`${user.carbohydrateCount}g`} description="Glucides"/>
        <Card icon="hamburger" color="rgba(253, 81, 129, 0.1)" value={`${user.lipidCount}g`} description="Lipides"/>
      </div>
    </div>
    
    
    </>
  );
}
