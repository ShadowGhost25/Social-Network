const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialStateProfile = {
  postsData: [],
  newPostText: [{ message: 'Добавь свой новый пост'}]
}

const profileReducer = (state = initialStateProfile, action) => {
  switch (action.type) {
    case ADD_POST:{
      
      let newPost = {
        id: Math.floor(Math.random(100) * 9999999),
        message: state.newPostText[0].message,
        likescount: Math.floor(Math.random(100) * 100),
      }
      
      let stateCopy = {...state}
      stateCopy.postsData = [...state.postsData]; 
      stateCopy.postsData.push(newPost)
      console.log(stateCopy);
      return stateCopy
    }
    case UPDATE_NEW_POST_TEXT:
      let stateCopy = {...state}
      stateCopy.newPostText[0].message = action.newText; 
      return stateCopy
      default:
        return state
  }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer