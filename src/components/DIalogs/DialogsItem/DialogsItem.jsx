import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogsItem.module.css';
import img from './img/L.jpg'

const DialogsItem = ({ dialogsData }) => {

  let dialogsElemnts = dialogsData.map(d => <NavLink key={d.id} className={style.user} to={d.link}><img className={style.avatar} src={img} alt="no avatar" />{d.name}</NavLink>)
  return (
    <div className={style.dialog}>
      {dialogsElemnts}
    </div>
  )
}
export default DialogsItem;