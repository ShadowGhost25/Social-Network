import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsData = [
    { link: "/dialogs/1", name: "Ilya" },
    { link: "/dialogs/2", name: "Sasha" },
    { link: "/dialogs/3", name: "Denis" },
    { link: "/dialogs/4", name: "Maksim" },
    { link: "/dialogs/5", name: "Kirill" },
    { link: "/dialogs/6", name: "Ilya" },
  ]
  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra" },
    { id: 3, message: "WHAT ?" },
  ]
  let dialogsElemnts = dialogsData.map(d => <DialogsItem name={d.name} link={d.link} />)
  let messageElement = messagesData.map(m => <Message message={m.message} />)
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        {dialogsElemnts}
      </div>
      <div className={style.messages}>
        {messageElement}
      </div>
    </div >
  )
}
export default Dialogs;