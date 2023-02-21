import UserMainData from '../models/UserMainData';
import UserPerformance from '../models/UserPerformance';
import UserAverageSessions from '../models/UserAverageSessions';
import UserData from '../models/UserData';
import UserDatas from '../data/userData.json';

const mockData = true;


    export async function getUser(id) {
        if (mockData) {
            const user = UserDatas.userMainData.find((userMainData) => userMainData.id === parseInt(id));
            return user !== undefined ? new UserMainData(user) : null;
        }
        
        try {
            const response = await fetch(`http://localhost:8080/user/${id}`);
            const {data} = await response.json();

            return new UserMainData(data);
        } catch (error) {
            console.error("nous ne pouvons pas afficher les données de l'utilisateur");
            return null;
        } 
    }
    
    export async function getUserPerformance(id) {
        if (mockData) {
            const performance = UserDatas.userPerformance.find((userPerformance) => userPerformance.userId === parseInt(id));
            return performance !== undefined ? new UserPerformance(performance) : null;
        }

        try {
            const response = await fetch(`http://localhost:8080/user/${id}/performance`);
            const {data} = await response.json();
        
            return new UserPerformance(data);
        } catch (error) {
            console.error("nous ne pouvons pas afficher les données de performance");
            return null;
        }
    }
    
    export async function getUserAverageSessions(id) {
        if (mockData) {
            const averageSessions = UserDatas.userAverageSessions.find((userAverageSessions) => userAverageSessions.userId === parseInt(id));
            return averageSessions !== undefined ? new UserAverageSessions(averageSessions) : null;
        }

        try {
            const response = await fetch(`http://localhost:8080/user/${id}/average-sessions`);
            const {data} = await response.json();
        
            return new UserAverageSessions(data);
        } catch (error) {
            console.error("nous ne pouvons pas afficher les données de durée moyenne des sessions");
            return null;
        }
    }
    
    export async function getUserActivity(id) {
        if (mockData) {
            const activity = UserDatas.userData.find((userData) => userData.userId === parseInt(id));
            return activity !== undefined ? new UserData(activity) : null;
        }

        try {
            const response = await fetch(`http://localhost:8080/user/${id}/activity`);
            const {data} = await response.json();
        
            return new UserData(data);
        } catch (error) {
            console.error("nous ne pouvons pas afficher les données de durée moyenne de l'activité quotidienne de l'utilisateur");
            return null;
        }
    }