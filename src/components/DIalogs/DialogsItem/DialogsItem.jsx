import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogsItem.module.css';

const DialogsItem = ({ link, name }) => {
  return (
    <div className={style.dialog}>
      <NavLink className={style.user} to={link}>{name}</NavLink>
    </div>
  )
}
export default DialogsItem