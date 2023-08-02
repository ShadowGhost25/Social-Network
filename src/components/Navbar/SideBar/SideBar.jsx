import React from 'react';
import style from './SideBar.module.css';
import img from './img/david.jpg'

const SideBar = ({ state, friendsData }) => {
  console.log(friendsData)
  let friendsElement = friendsData.map(f => <div className={style.friends} key={f.id}><img className={style.avatar} src={img} alt="" />{f.friends}</div>)
  return (
    <div className={style.friends_block}>
      {friendsElement}
    </div>
  )
}
export default SideBar 