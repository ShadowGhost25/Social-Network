/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Posts from './Posts/Posts';
// eslint-disable-next-line no-unused-vars
import style from './MyPosts.module.css';

const MyPosts = () => {
	let postsData = [
		{ id: 1, message: "Hi how are you", likescount: 62 },
		{ id: 2, message: "It`s my first post", likescount: 51 },
	]
	let postsElement = postsData.map(p => <Posts key={p.id} message={p.message} likeCount={p.likescount} />)
	return (
		<div>
			<div>
				My post
			</div>
			<div>
				new post
			</div>
			<div className={style.posts}>
				{postsElement}
			</div>
		</div>
	)
}
export default MyPosts