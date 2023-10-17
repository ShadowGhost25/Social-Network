import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

let ProfileContainer = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profilePage.profile)
  // console.log(profile)
  let getUsers = () => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      setUsersProfilee(response.data)
    })
  }
  useEffect(() => {
    getUsers()
  }, [])


  let setUsersProfilee = (profile) => {
    debugger
    dispatch(setUsersProfile(profile))
  }

  return (
    <div>
      <Profile profile={profile} />
    </div >
  )
}
export default ProfileContainer