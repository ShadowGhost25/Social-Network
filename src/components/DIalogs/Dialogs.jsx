import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = ({ messagesPage, dialogsData, dispatch }) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <DialogsItem dialogsData={messagesPage.dialogsData} />
      </div>
      <div className={style.messages}>
        <Message dispatch={dispatch} messagesPage={messagesPage} />
      </div>
    </div >
  )
}
export default Dialogs;