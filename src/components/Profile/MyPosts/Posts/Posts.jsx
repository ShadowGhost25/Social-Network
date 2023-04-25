/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import style from './Posts.module.css';

const Posts = (props) => {
  return (
    <div className={style.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW22Z3Bf-ISIm7nCh1o-4JmX6vA2y-0HbgjQ&usqp=CAU" alt="" />
      {props.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}
export default Posts