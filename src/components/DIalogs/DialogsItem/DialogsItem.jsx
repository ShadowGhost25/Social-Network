import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogsItem.module.css';

const DialogsItem = ({ link, name }) => {
  let dialogsData = [
    { id: 1, link: "/dialogs/1", name: "Ilya" },
    { id: 2, link: "/dialogs/2", name: "Sasha" },
    { id: 3, link: "/dialogs/3", name: "Denis" },
    { id: 4, link: "/dialogs/4", name: "Maksim" },
    { id: 5, link: "/dialogs/5", name: "Kirill" },
  ]

  let dialogsElemnts = dialogsData.map(d => <NavLink key={d.id} className={style.user} to={d.link}>{d.name}</NavLink>)
  return (
    <div className={style.dialog}>
      {dialogsElemnts}
    </div >
  )
}
export default DialogsItem;