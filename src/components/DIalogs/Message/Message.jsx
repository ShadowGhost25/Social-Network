import React from 'react';
import style from './Message.module.css';

const Message = ({ message }) => {
  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra" },
    { id: 3, message: "WHAT ?" },
  ]
  let messageElement = messagesData.map(m => <div key={m.id}> {m.message}</div >)
  return (
    <div>
      {messageElement}
    </div>
  )
}
export default Message