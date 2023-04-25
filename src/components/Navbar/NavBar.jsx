/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from './NavBar.module.css';
const NavBar = (props) => {
	return (
		<nav className={style.nav}>
			<div className={style.item}>
				<a src="">Profile</a>
			</div>
			<div className={style.item}>
				<a src="">Message</a>
			</div>
			<div className={style.item}><a src="">News</a></div>
			<div className={style.item}><a src="">Music</a></div>
			<div className={style.item}><a src="">Settings</a></div>
		</nav>
	)
}
export default NavBar