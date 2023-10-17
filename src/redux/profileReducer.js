const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialStateProfile = {
  postsData: [],
  newPostText: "",
  profile: null
}

const profileReducer = (state = initialStateProfile, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Math.floor(Math.random(100) * 9999999),
        message: state.newPostText,
        likescount: Math.floor(Math.random(100) * 100),
      }

      return {
        ...state, newPostText: "", postsData: [...state.postsData, newPost],
      }
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state, newPostText: action.text,
      }
    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile,
      }
    default:
      return state
  }

}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text })
export default profileReducer