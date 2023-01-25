import React, { Component } from 'react';
import './App.css';

const App = () => {
	return (
		<div>
			<Header />
			<Technologes />
		</div>
	);
}
const Technologes = () => {
	return (
		<div>
			<ul>
				<li>css</li>
				<li>html</li>
				<li>react</li>
			</ul>
		</div>)
}

const Header = () => {
	return (
		<div className="App">
			<ul>
				<a href='#'>Home</a>
				<a href='#'>DOM</a>
				<a href='#'>News</a>
			</ul>
		</div >
	);
}

export default App;
