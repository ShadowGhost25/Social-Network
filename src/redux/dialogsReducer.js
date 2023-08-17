const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
export const dialogsReducer = (state, action) => {
    switch (action.type) {
      case ADD_MESSAGE:
        let newMessage = {
          id: Math.floor(Math.random(100) * 9999999),
          message: state.newMessageText[0].message,
        }
        state.newMessageText[0].message = "";
        state.messagesData.push(newMessage)
        return state
        case UPDATE_NEW_MESSAGE_TEXT:
        state.newMessageText[0].message = action.body
        return state
      default:
        return state
    } 
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessgeTextCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})
export default dialogsReducer