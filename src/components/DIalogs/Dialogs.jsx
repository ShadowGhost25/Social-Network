import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = ({ state, messagesPage, dialogsData, messagesData, addMessage, updateNewMessageChange }) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <DialogsItem dialogsData={messagesPage.dialogsData} />
      </div>
      <div className={style.messages}>
        <Message updateNewMessageChange={updateNewMessageChange} messagesData={messagesPage.messagesData} addMessage={addMessage} newMessageText={messagesPage.newMessageText} />
      </div>
    </div >
  )
}
export default Dialogs;