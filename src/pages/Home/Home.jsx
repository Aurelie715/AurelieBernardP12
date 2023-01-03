import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import UserDatas from '../../data/userData.json';

export default function Home() {
  const { userId } = useParams();
  const user = UserDatas.userMainData.find((userMainData) => userMainData.id === parseInt(userId));
  console.log(user);
  if (user === undefined) {
    return <></>;
  }
  return (
    <>
      <div>{user.id}</div>
      <div>test</div>
    </>
  );
}
