import React from "react";
import s from "./Users.module.css";

let Users = ({ follow, unfollow, setUsers, stateUsersPage }) => {
  return (
    <div>
      {
        stateUsersPage.usersPage.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photo} alt={"no"} className={s.userPhoto} />
            </div>
            <div>
              {u.followed ?
                <button onClick={() => { unfollow(u.id) }}>UnFollow</button>
                : <button onClick={() => { follow(u.id) }}>Follow</button>}
            </div>

          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
      }
    </div>

  )
}
// debugger
export default Users