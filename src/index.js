import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import App from './App';

import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));
let rerenderEntireThree = (state) => {
  root.render(
    <Provider state={state} store={store}>
      <BrowserRouter>
        <App state={state} getState={store.getState} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </Provider>
  );
  // console.log(store)
}
rerenderEntireThree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireThree(state)
});

window.store = store
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
