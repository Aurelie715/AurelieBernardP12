import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import UserDatas from '../../data/userData.json'

export default function Home() {
    const { userId } = useParams();
    const user = UserDatas.find((userMainData) => userMainData.id === userId);
  return (
    <>
    <div>{user.userId}</div>
    <div>test</div>
    </>
  )
}
