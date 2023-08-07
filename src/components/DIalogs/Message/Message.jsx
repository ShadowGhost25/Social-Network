import React from 'react';
import style from './Message.module.css';


const Message = ({ messagesData }) => {

  let newMessage = React.createRef();

  let addMeassage = () => {
    let text = newMessage.current.value;
    alert(text);
  }
  let messageElement = messagesData.map(m => <div className={style.messages} key={m.id}> {m.message}</div >)
  return (
    <div>
      {messageElement}
      <div>
        <textarea ref={newMessage} cols="30" rows="5"></textarea>
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