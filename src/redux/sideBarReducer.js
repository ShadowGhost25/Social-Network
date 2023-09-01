
let initialStateSideBar = {
  friendsData:[
    {id: 1, friends: "Maks"},
    {id: 2, friends: "Sasha"},
    {id: 3, friends: "Denis"},
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
export const sideBarReducer = (state = initialStateSideBar, action ) => {
  return state;
}
export default sideBarReducer