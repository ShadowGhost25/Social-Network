import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = ({ link, name }) => {

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <DialogsItem />
      </div>
      <div className={style.messages}>
        <Message />
      </div>
    </div >
  )
}
export default Dialogs;