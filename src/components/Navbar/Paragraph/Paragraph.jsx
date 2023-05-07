import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Paragraph.module.css';
const Paragraph = ({ link, item }) => {
  return (
    <div className={style.item}>
      <NavLink
        to={link}
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
          };
        }}
      >
        {item}
      </NavLink>
    </div>
  )
}
export default Paragraph