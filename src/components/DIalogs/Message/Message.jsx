import React from 'react';
import style from './Message.module.css';


const Message = ({ dispatch, updateNewMessgeTextCreator, addMessageActionCreator, messagesPage }) => {
  // console.log(messagesPage)

  let onSendMessageClick = () => {
    addMessageActionCreator()
  }

  let onMessageChange = (e) => {
    let body = e.target.value;
    updateNewMessgeTextCreator(body)
  }

  let messageElement = messagesPage.messagesData.map(m => <div className={style.messages} key={m.id}> {m.message}</div >)
  return (
    <div>
      {messageElement}
      <div>
        <textarea placeholder='Enter your message' onChange={onMessageChange} value={messagesPage.newMessageText} cols="30" rows="5" />
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