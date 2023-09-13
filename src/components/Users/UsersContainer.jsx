import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";

let UsersContainer = () => {
  const dispatch = useDispatch()
  const stateUsersPage = useSelector((state) => state)

  let follow = (userId) => {
    dispatch(followAC(userId));
  }

  let unfollow = (userId) => {
    dispatch(unfollowAC(userId));
  }
  let setUsers = (users) => {
    dispatch(setUsersAC(users));
  }
  return (
    <Users follow={follow} unfollow={unfollow} setUsers={setUsers} stateUsersPage={stateUsersPage} />
  )
}

export default UsersContainer