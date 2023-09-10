const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialStateProfile = {
  postsData: [],
  newPostText: ""
}

const profileReducer = (state = initialStateProfile, action) => {
  switch (action.type) {
    case ADD_POST:{
      
      let newPost = {
        id: Math.floor(Math.random(100) * 9999999),
        message: state.newPostText,
        likescount: Math.floor(Math.random(100) * 100),
      }
      
      return {
        ...state,
        newPostText: "",
        postsData: [...state.postsData, newPost],
      }
    }
    case UPDATE_NEW_POST_TEXT:
      return{
        ...state,
        newPostText: action.newText,
      }
      default:
        return state
  }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer