import React from "react";
import axios from "axios";
import png from "./img/users.png"
import s from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageSize}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onClickPage(pageNumber) {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return (
      <div>
        <div>
          {pages.map(p => {
            return <span className={this.props.currentPage === p && s.selectedPage} onClick={(e) => {
              this.onClickPage(p)
            }}>{p}</span>
          })}
        </div>
        {
          this.props.usersPage.users.map(u => <div key={u.id}>
            <span>
              <div>
                <img src={u.photos.small === null ? png : u.photos.small} alt={"no foto"} className={s.userPhoto} />
              </div>
              <div>
                {u.followed ?
                  <button onClick={() => { this.props.unfollow(u.id) }}>UnFollow</button>
                  : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}
export default Users