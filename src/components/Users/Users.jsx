import React from "react";
import png from "./img/users.png"
import s from "./Users.module.css"
let Users = ({ follow, unfollow, totalUsersCount, pageSize, currentPage, nextPage, usersPage }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  // console.log(onClickPage)
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      <div>
        {pages.map((p, index) => {
          return <span key={index} className={currentPage === p && s.selectedPage} onClick={(e) => {
            nextPage(p)
          }}>{p}</span>
        })}
      </div>
      {
        usersPage.users.map(u => <div key={u.id}>
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

export default Users