import React from 'react';
import style from './NavBar.module.css';
import Paragraph from './Paragraph/Paragraph';
import SideBar from './SideBar/SideBar';

const NavBar = ({ sideBar }) => {
	let navBarElement = sideBar.navBarData.map(n => <Paragraph key={n.id} item={n.item} link={n.link} />)

	return (
		<nav className={style.sidebar}>
			{navBarElement}
			<h2>Friends</h2>
			<SideBar friendsData={sideBar.friendsData} />
		</nav >
	)
}
export default NavBar