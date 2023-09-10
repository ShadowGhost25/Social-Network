const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialStateMessage ={
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
  newMessageText:""
}

export const dialogsReducer = (state = initialStateMessage, action) => {
  const randomId = () => Math.floor(Math.random(100) * 9999999)
    switch (action.type) {
      case ADD_MESSAGE: 
      const newMessage = {
        id: randomId(),
        message: state.newMessageText,
      }
        return {
          ...state,
          newMessageText: "",
          messagesData: [...state.messagesData, newMessage]
        }    
        case UPDATE_NEW_MESSAGE_TEXT:
        return {
          ...state,
        newMessageText: action.body
        }
      default:
        return state
    } 
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessgeTextCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})
export default dialogsReducer