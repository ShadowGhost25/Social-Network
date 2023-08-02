import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = ({ state, dialogsData, messagesData }) => {

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <DialogsItem dialogsData={state.dialogsData} />
      </div>
      <div className={style.messages}>
        <Message messagesData={state.messagesData} />
      </div>
    </div >
  )
}
export default Dialogs;