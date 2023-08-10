import React from 'react';
import style from './NavBar.module.css';
import Paragraph from './Paragraph/Paragraph';
import SideBar from './SideBar/SideBar';

const NavBar = ({ state, friendsData }) => {
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
			<h2>Friends</h2>
			<SideBar friendsData={state.friendsData} />
		</nav >
	)
}
export default NavBar