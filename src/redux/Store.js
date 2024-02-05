import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
let store = {
  _state: {
    profilePage: {
      postsData: [],
      newPostText: [{ message: 'Добавь свой новый пост' }]
    },
    messagesPage: {
      dialogsData: [
        { id: 1, link: "/dialogs/1", name: "Ilya" },
        { id: 2, link: "/dialogs/2", name: "Sasha" },
        { id: 3, link: "/dialogs/3", name: "Pasha" },
        { id: 4, link: "/dialogs/4", name: "Maksim" },
        { id: 5, link: "/dialogs/5", name: "Kirill" },
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your it-kamasutra" },
        { id: 3, message: "WHAT ?" },
      ],
      newMessageText: [{ message: '' }]
    },
    sideBar: {
      friendsData: [
        { id: 1, friends: "Maks" },
        { id: 2, friends: "Sasha" },
        { id: 3, friends: "Denis" },
      ],
      navBarData:
        [
          { id: 1, item: "Profile", link: "/profile" },
          { id: 2, item: "Messages", link: "/dialogs" },
          { id: 3, item: "Music", link: "/music" },
          { id: 4, item: "News", link: "/news" },
          { id: 5, item: "Settings", link: "/settings" },
        ],
    }

  },

  _callSubscriber() {
    console.log("state changed")
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    this._state.sideBar = sideBarReducer(this._state.sideBar, action)
    this._callSubscriber(this._state)
  }
}
export default store