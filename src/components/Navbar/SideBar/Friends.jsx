import React from 'react';
import style from './SideBar.module.css';
import { NavLink } from "react-router-dom";
import png from "../../Users/img/users.png"
import { useSelector } from "react-redux";

const Friends = () => {
  const usersPage = useSelector((state) => state.usersPage)
  // console.log(usersPage)
  return (
    <div className={style.friends_block}>
      {
        usersPage.users.map(u => <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/'}>
                <img src={u.photos.small === null ? png : u.photos.small} alt={"no foto"} className={style.avatar} />
              </NavLink>
            </div>

          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div> */}
            </span>
          </span>
        </div>)
      }
    </div>
  )
}
export default Friends 