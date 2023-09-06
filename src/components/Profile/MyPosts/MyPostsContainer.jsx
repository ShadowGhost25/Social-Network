import React from 'react';
import { addPostActionCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ getState, dispatch }) => {
  let statee = getState().profilePage

  let addPost = () => {
    dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextCreator(text)
    dispatch(action);
  }

  return (
    <MyPosts updateNewPostTextCreator={onPostChange} addPost={addPost} profilePage={statee} />
  )
}
export default MyPostsContainer 