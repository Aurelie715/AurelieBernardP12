import UserMainData from '../models/UserMainData';
import UserPerformance from '../models/UserPerformance';
import UserAverageSessions from '../models/UserAverageSessions';
import UserData from '../models/UserData';

export async function getUser(id) {
    const response = await fetch(`http://localhost:8080/user/${id}`);
    const {data} = await response.json();

    return new UserMainData(data);
}

export async function getUserPerformance(id) {
    const response = await fetch(`http://localhost:8080/user/${id}/performance`);
    const {data} = await response.json();

    return new UserPerformance(data);
}

export async function getUserAverageSessions(id) {
    const response = await fetch(`http://localhost:8080/user/${id}/average-sessions`);
    const {data} = await response.json();

    return new UserAverageSessions(data);
}

export async function getUserActivity(id) {
    const response = await fetch(`http://localhost:8080/user/${id}/activity`);
    const {data} = await response.json();

    return new UserData(data);
}