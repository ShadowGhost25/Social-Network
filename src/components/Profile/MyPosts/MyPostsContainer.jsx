import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostActionCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ getState }) => {
  const dispatch = useDispatch()
  const stateProfilePage = useSelector((state) => state.profilePage)

  let addPost = () => {
    dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextCreator(text)
    dispatch(action);
  }

  return (
    <MyPosts updateNewPostTextCreator={onPostChange} addPost={addPost} stateProfilePage={stateProfilePage} />
  )
}
export default MyPostsContainer 