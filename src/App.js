import React from 'react';

// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Dialogs from './components/DIalogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavBar from './components/Navbar/NavBar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
const App = ({ getState }) => {

	return (
		<div className='app-wrapper'>
			<Header />
			<NavBar />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/profile' element={<ProfileContainer />} />
					<Route path='/dialogs' element={<Dialogs getState={getState} />} />
					<Route path='/news' element={<News />} />
					<Route path='/music' element={<Music />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/users' element={<UsersContainer />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;