const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialStateProfile = {
  postsData: [],
  newPostText: [{ message: 'Добавь свой новый пост'}]
}

const profileReducer = (state = initialStateProfile, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: Math.floor(Math.random(100) * 9999999),
        message: state.newPostText[0].message,
        likescount: Math.floor(Math.random(100) * 100),
      }
      
      state.postsData.push(newPost); 
      state.newPostText[0].message = "";
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText[0].message = action.newText; 
      return state
      default:
        return state
  }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer