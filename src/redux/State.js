let store = {
  _state: {
    profilePage:{
      postsData: [
        
      ],
      newPostText: [{ message: 'Добавь свой новый пост'}]
    },
    messagesPage:{
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
      newMessageText:[{message: ''}]
    },
    sideBar:{
      friendsData:[
        {id: 1, friends: "Maks"},
        {id: 2, friends: "Sasha"},
        {id: 3, friends: "Denis"},
      ]
    }
    
  },

  _callSubscriber() {
    console.log("state changed")
  },
  
  updateNewMessageChange(newText){

  },
  
  subscribe(observer){
    this._callSubscriber = observer
  },
  getState(){
    return this._state;
  },
  dispatch(action) {
    if(action.type === "ADD-POST"){
      let newPost = {
        id: Math.floor(Math.random(100) * 100),
        message: this._state.profilePage.newPostText[0].message,
        likescount: Math.floor(Math.random(100) * 100),
      }
      this._state.profilePage.postsData.push(newPost); 
      this._state.profilePage.newPostText[0].message = "";
      this._callSubscriber(this._state);
    }else if (action.type === "UPDATE-NEW-POST-TEXT"){
      this._state.profilePage.newPostText[0].message = action.newText; 
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE"){
      let newMessage = {
        id: Math.floor(Math.random(100) * 100),
        message: this._state.messagesPage.newMessageText[0].message,
      }
      this._state.messagesPage.messagesData.push(newMessage)
      this._state.messagesPage.newMessageText[0].message = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT"){
      this._state.messagesPage.newMessageText[0].message = action.newText
      this._callSubscriber(this._state);
    }
  }
}

export default store