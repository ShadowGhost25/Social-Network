import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import App from './App';

import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
let rerenderEntireThree = (state) => {
  root.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}  />
    </BrowserRouter>
  );
  // console.log(state)
}
rerenderEntireThree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireThree(state)
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
