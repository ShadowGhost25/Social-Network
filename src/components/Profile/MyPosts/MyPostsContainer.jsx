import React from 'react';
import { addPostActionCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ dispatch, profilePage, getState }) => {
  let state = getState().profilePage

  let addPost = () => {
    dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextCreator(text)
    dispatch(action);
  }

  return (
    <MyPosts updateNewPostTextCreator={onPostChange} addPost={addPost} profilePage={state} />
  )
}
export default MyPostsContainer 