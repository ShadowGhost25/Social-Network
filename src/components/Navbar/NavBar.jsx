import React from 'react';
import style from './NavBar.module.css';
import Paragraph from './Paragraph/Paragraph';

const NavBar = (props) => {
	return (
		<nav class={style.sidebar}>
			<Paragraph item="Profile" link="/profile" />
			<Paragraph item="Messages" link="/dialogs" />
			<Paragraph item="Music" link="/music" />
			<Paragraph item="News" link="/news" />
			<Paragraph item="Settings" link="/settings" />
		</nav >
	)
}
export default NavBar