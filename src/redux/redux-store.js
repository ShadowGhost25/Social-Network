import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
let reducers = combineReducers ({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sideBar: sideBarReducer
});

let store = createStore (reducers);

export default store;