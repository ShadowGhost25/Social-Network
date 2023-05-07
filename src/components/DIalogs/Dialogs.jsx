import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <DialogsItem name="Ilya" link="/dialogs/1" />
        <DialogsItem name="Sahsha" link="/dialogs/2" />
        <DialogsItem name="Denis" link="/dialogs/3" />
        <DialogsItem name="Maksim" link="/dialogs/4" />
        <DialogsItem name="Kirill" link="/dialogs/5" />
        <DialogsItem name="Pasha" link="/dialogs/6" />
      </div>
      <div className={style.messages}>
        <Message message="Hi" />
        <Message message="How is your it-kamasutra" />
        <Message message="WHAT ?" />
      </div>
    </div >
  )
}
export default Dialogs;