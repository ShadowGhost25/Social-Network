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
const App = ({state, dispatch}) => {
	// console.log(state)
	return (
		<div className='app-wrapper'>
			<Header />
			<NavBar state={state.sideBar}/>
			<div className='app-wrapper-content'>
			<Routes>
				<Route path='/profile' element = {<Profile dispatch={dispatch} profilePage={state.profilePage}/>}/>
				<Route path='/dialogs' element = {<Dialogs dispatch={dispatch} messagesPage={state.messagesPage}/>}/>
				<Route path='/news' element = {<News />}/>
				<Route path='/music' element = {<Music />}/>
				<Route path='/settings' element = {<Settings />}/>
			</Routes>
			</div>
		</div>
	);
}

export default App;