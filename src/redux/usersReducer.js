const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

let initialstate ={
  users: [
    // { id: 1, photo: "https://i.ytimg.com/vi/uy-xS677tHA/mqdefault.jpg", followed: false, status: "Hello world", name: "Ilya", location: { city: "Penza", country: "Russia"} },
    // { id: 2, photo: "https://i.ytimg.com/vi/uy-xS677tHA/mqdefault.jpg", followed: true, status: "Hello world", name: "Kirill", location: { city: "Moskva", country: "Russia"} },
    // { id: 3, photo: "https://i.ytimg.com/vi/uy-xS677tHA/mqdefault.jpg", followed: true, status: "Hello world", name: "Pasha", location: { city: "Kiev", country: "Ucrain"} },
    // { id: 4, photo: "https://i.ytimg.com/vi/uy-xS677tHA/mqdefault.jpg", followed: false, status: "Hello world", name: "Sasha", location: { city: "Minsk", country: "Belarus"} },
    
  ]
}

export const usersReducer = (state = initialstate, action) => {
    switch (action.type) {
      case FOLLOW:
        debugger
        return{
          ...state,
          users: state.users.map( u => {
            if(u.id === action.userId){
              return { ...u, followed: true}
            }
            return u
          }),
        }
      case UNFOLLOW:
        return{
          ...state,
          users: state.users.map( u => {
            if(u.id === action.userId){
              return { ...u, followed: false}
            }
            return u
          }),
        }
      case SET_USERS: 
        return{
          ...state,
          users: [...state.users, ...action.users]
        }
      
      default:
        return state
    } 
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users}) 
export default usersReducer