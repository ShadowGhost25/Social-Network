import React from 'react';
import { useSelector } from 'react-redux';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import MessageContainer from './Message/MessageContainer';

const Dialogs = ({ dispatch, getState }) => {
  const state = useSelector(state => state.messagesPage)
  console.log('state =<>', state);
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <DialogsItem dialogsData={state.dialogsData} />
      </div>
      <div className={style.messages}>
        <MessageContainer dispatch={dispatch} messagesPage={state} getState={getState} />
      </div>
    </div >
  )
}
export default Dialogs;