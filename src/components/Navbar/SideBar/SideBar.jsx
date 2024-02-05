import React from 'react';
import style from './SideBar.module.css';
import { useSelector } from "react-redux";
import Friends from './Friends';

const SideBar = ({ friendsData }) => {
  const usersPage = useSelector((state) => state.usersPage)
  // console.log(usersPage.users[0].followed)
  return (
    <div className={style.friends_block}>
      {usersPage.users[0].followed === true ? <Friends /> : <div> no friends</div>}
    </div>
  )
}
export default SideBar 