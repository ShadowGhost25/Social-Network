import React from 'react';
import style from './Message.module.css';


const Message = ({ dispatch, messagesPage }) => {

  let newMessage = React.createRef();

  let addMeassage = () => {
    dispatch({ type: "ADD-MESSAGE" })
  }

  let onMessageChange = () => {
    let text = newMessage.current.value;
    let action = { type: "UPDATE-NEW-MESSAGE-TEXT", newText: text }
    dispatch(action)
  }

  let messageElement = messagesPage.messagesData.map(m => <div className={style.messages} key={m.id}> {m.message}</div >)
  return (
    <div>
      {messageElement}
      <div>
        <textarea onChange={onMessageChange} ref={newMessage} value={messagesPage.newMessageText[0].message} cols="30" rows="5" />
      </div>
      <div>
        <button onClick={addMeassage}>
          Message
        </button>
      </div>
    </div >

  )
}
export default Message