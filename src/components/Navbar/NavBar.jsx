import React from 'react';
import { useSelector } from 'react-redux';
import style from './NavBar.module.css';
import Paragraph from './Paragraph/Paragraph';
import SideBar from './SideBar/SideBar';

const NavBar = () => {
	const { friendsData, navBarData } = useSelector(state => state.sideBar)
	// console.log('state =<>', friendsData, navBarData);
	return (
		<nav className={style.sidebar}>
			{navBarData.map(n => <Paragraph key={n.id} item={n.item} link={n.link} />)}
			<h2>Friends</h2>
			<SideBar friendsData={friendsData} />
		</nav >
	)
}
export default NavBar