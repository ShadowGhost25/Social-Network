import React from 'react';
import style from './Message.module.css';


const Message = ({ messagesData }) => {

  let messageElement = messagesData.map(m => <div key={m.id}> {m.message}</div >)
  return (
    <div>
      {messageElement}
    </div>
  )
}
export default Message