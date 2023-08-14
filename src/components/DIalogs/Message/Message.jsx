import React from 'react';
import { addMessageActionCreator, updateNewMessgeTextCreator } from '../../../redux/State';
import style from './Message.module.css';


const Message = ({ dispatch, messagesPage }) => {


  let onSendMessageClick = () => {
    dispatch(addMessageActionCreator())
  }

  let onMessageChange = (e) => {
    let body = e.target.value;
    dispatch(updateNewMessgeTextCreator(body))
  }

  let messageElement = messagesPage.messagesData.map(m => <div className={style.messages} key={m.id}> {m.message}</div >)
  return (
    <div>
      {messageElement}
      <div>
        <textarea placeholder='Enter your message' onChange={onMessageChange} value={messagesPage.newMessageText[0].message} cols="30" rows="5" />
      </div>
      <div>
        <button onClick={onSendMessageClick}>
          Message
        </button>
      </div>
    </div >

  )
}
export default Message