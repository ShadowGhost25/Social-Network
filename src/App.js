import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import './App.css';
import Dialogs from './components/DIalogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavBar from './components/Navbar/NavBar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
const App = ({state, addPost, updateNewPostChange, addMessage, updateNewMessageChange}) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<NavBar state={state.sideBar}/>
			<div className='app-wrapper-content'>
			<Routes>
				<Route path='/profile' element = {<Profile updateNewPostChange={updateNewPostChange} profilePage={state.profilePage} addPost={addPost}/>}/>
				<Route path='/dialogs' element = {<Dialogs updateNewMessageChange={updateNewMessageChange} messagesPage={state.messagesPage} addMessage={addMessage}/>}/>
				<Route path='/news' element = {<News />}/>
				<Route path='/music' element = {<Music />}/>
				<Route path='/settings' element = {<Settings />}/>
			</Routes>
			</div>
		</div>
	);
}

export default App;