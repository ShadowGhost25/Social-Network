let rerenderEntireThree = () =>{
  console.log("state changed")
}
let state = {
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

  }
  window.state = state;
  
export const addPost = () => {
  let newPost = {
    id: generateRandomId(100),
    message: state.profilePage.newPostText[0].message,
    likescount: generateRandomLike(),
  }
  state.profilePage.postsData.push(newPost); 
  state.profilePage.newPostText[0].message = "";
  rerenderEntireThree(state);
}

const generateRandomId = (max) =>{
  const randomId = Math.floor(Math.random(max) * 100);
  return randomId;
}

const generateRandomLike = (max) =>{
  const randomLike = Math.floor(Math.random(max) * 100);
  return randomLike;
}

export const updateNewPostChange = (newText) => {
  state.profilePage.newPostText[0].message = newText; 
  rerenderEntireThree(state);
}
export const addMessage = () => {
  let newMessage = {
    id: generateRandomId(100),
    message: state.messagesPage.newMessageText[0].message,
  }
  state.messagesPage.messagesData.push(newMessage)
  state.messagesPage.newMessageText[0].message = "";
  rerenderEntireThree(state);
}

export const updateNewMessageChange = (newText) => {
  state.messagesPage.newMessageText[0].message = newText
  rerenderEntireThree(state);
}

export const subscribe = (observer) =>{
  rerenderEntireThree = observer
}

export default state