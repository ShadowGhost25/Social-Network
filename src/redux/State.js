
  let state = {
    profilePage:{
      postsData: [
        { id: 1, message: "Hi how are you", likescount: 62 },
        { id: 2, message: "It`s my first post", likescount: 51 },
      ],
      
    },
    messagesPage:{
    dialogsData: [
      { id: 1, link: "/dialogs/1", name: "Ilya" },
      { id: 2, link: "/dialogs/2", name: "Sasha" },
      { id: 3, link: "/dialogs/3", name: "Denis" },
      { id: 4, link: "/dialogs/4", name: "Maksim" },
      { id: 5, link: "/dialogs/5", name: "Kirill" },
    ],
    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your it-kamasutra" },
      { id: 3, message: "WHAT ?" },
    ]
    },
    sideBar:{
      friendsData:[
        {id: 1, friends: "Maks"},
        {id: 2, friends: "Sasha"},
        {id: 3, friends: "Denis"},
      ]
    }
}


export default state