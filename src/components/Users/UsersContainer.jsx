import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";

let UsersContainer = () => {
  const dispatch = useDispatch()
  const usersPage = useSelector((state) => state.usersPage)
  const pageSize = useSelector((state) => state.usersPage.pageSize)
  const totalUsersCount = useSelector((state) => state.usersPage.totalUsersCount)
  const currentPage = useSelector((state) => state.usersPage.currentPage)

  const getUsers = () => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(response => {
      setUsers(response.data.items)
      setTotalUsersCount(response.data.totalCount)
    })
  }
  const nextPage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    getUsers()
  }, [])

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
    <Users
      totalUsersCount={totalUsersCount}
      pageSize={pageSize}
      currentPage={currentPage}
      nextPage={nextPage}
      usersPage={usersPage}
      follow={follow}
      unfollow={unfollow}
    />
  )
}

export default UsersContainer