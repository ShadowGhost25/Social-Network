import React from "react";
import axios from "axios";
import png from "./img/users.png"
import s from "./Users.module.css";

let Users = ({ follow, unfollow, setUsers, stateUsersPage }) => {
  let getUsers = () => {
    if (stateUsersPage.usersPage.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        setUsers(response.data.items)
      })
    }
  }

  return (
    <div>
      <button onClick={getUsers} > Добавить пользователей  </button>
      {
        stateUsersPage.usersPage.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small === null ? png : u.photos.small} alt={"no foto"} className={s.userPhoto} />
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
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>)
      }
    </div>

  )
}
// debugger
export default Users