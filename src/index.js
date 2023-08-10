import React from 'react';
import reportWebVitals from './reportWebVitals';
import State, { subscribe, addPost, updateNewPostChange, addMessage, updateNewMessageChange } from './redux/State';
import App from './App';

import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
let rerenderEntireThree = () => {
  root.render(
    <BrowserRouter>
      <App state={State} addPost={addPost}  updateNewMessageChange={updateNewMessageChange} updateNewPostChange={updateNewPostChange} addMessage={addMessage}/>
    </BrowserRouter>
  );
}
rerenderEntireThree();
subscribe(rerenderEntireThree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
