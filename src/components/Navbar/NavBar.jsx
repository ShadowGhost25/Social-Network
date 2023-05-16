import React from 'react';
import style from './NavBar.module.css';
import Paragraph from './Paragraph/Paragraph';

const NavBar = (props) => {
	let navBarData = [
		{ id: 1, item: "Profile", link: "/profile" },
		{ id: 2, item: "Messages", link: "/dialogs" },
		{ id: 3, item: "Music", link: "/music" },
		{ id: 4, item: "News", link: "/news" },
		{ id: 5, item: "Settings", link: "/settings" },
	]
	let navBarElement = navBarData.map(n => <Paragraph key={n.id} item={n.item} link={n.link} />)
	return (
		<nav className={style.sidebar}>
			{navBarElement}
		</nav >
	)
}
export default NavBar