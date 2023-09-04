import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import MessageContainer from './Message/MessageContainer';

const Dialogs = ({ messagesPage, dialogsData, dispatch, getState }) => {
  // console.log(messagesPage)
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <DialogsItem dialogsData={messagesPage.dialogsData} />
      </div>
      <div className={style.messages}>
        <MessageContainer dispatch={dispatch} messagesPage={messagesPage} getState={getState} />
      </div>
    </div >
  )
}
export default Dialogs;