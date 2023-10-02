import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./UsersClass";

let UsersContainer = () => {
  const dispatch = useDispatch()
  const usersPage = useSelector((state) => state.usersPage)
  const pageSize = useSelector((state) => state.usersPage.pageSize)
  const totalUsersCount = useSelector((state) => state.usersPage.totalUsersCount)
  const currentPage = useSelector((state) => state.usersPage.currentPage)


  let follow = (userId) => {
    dispatch(followAC(userId));
  }

  let setCurrentPage = (pageNumber) => {
    dispatch(setCurrentPageAC(pageNumber))
  }
  let setTotalUsersCount = (totalCount) => {
    dispatch(setTotalUsersCountAC(totalCount))
  }

  let unfollow = (userId) => {
    dispatch(unfollowAC(userId));
  }
  let setUsers = (users) => {
    dispatch(setUsersAC(users));
  }
  return (
    <Users follow={follow} unfollow={unfollow} setUsers={setUsers} setCurrentPage={setCurrentPage} setTotalUsersCount={setTotalUsersCount} usersPage={usersPage} pageSize={pageSize} totalUsersCount={totalUsersCount} currentPage={currentPage} />
  )
}

export default UsersContainer