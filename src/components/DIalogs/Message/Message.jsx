import React from 'react';
import style from './Message.module.css';


const Message = (props) => {

  let newMessage = React.createRef();

  let addMeassage = () => {
    props.addMessage()
  }

  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessageChange(text)
  }

  let messageElement = props.messagesData.map(m => <div className={style.messages} key={m.id}> {m.message}</div >)
  return (
    <div>
      {messageElement}
      <div>
        <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText[0].message} cols="30" rows="5" />
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