import React from 'react';
import { useDispatch } from 'react-redux';
import { addMessageActionCreator, updateNewMessgeTextCreator } from '../../../redux/dialogsReducer';
import Message from "./Message"

const MessageContainer = ({ messagesPage, getState }) => {
  const dispatch = useDispatch()
  let state = getState().messagesPage

  let onSendMessageClick = () => {
    dispatch(addMessageActionCreator())
  }

  let onMessageChange = (body) => {
    dispatch(updateNewMessgeTextCreator(body))
  }
  return (
    <Message messagesPage={state} updateNewMessgeTextCreator={onMessageChange} addMessageActionCreator={onSendMessageClick} />
  )
}
export default MessageContainer