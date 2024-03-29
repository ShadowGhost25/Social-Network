import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
let reducers = combineReducers ({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer
});

let store = createStore (reducers);

export default store;