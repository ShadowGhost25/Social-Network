import React from 'react';
import style from './Message.module.css';

const Message = ({ message }) => {
  return (
    <div className={style.dialog}>
      <div className={style.message}>{message}</div>
    </div>
  )
}
export default Message