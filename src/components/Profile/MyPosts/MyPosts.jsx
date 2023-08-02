/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Posts from './Posts/Posts';
// eslint-disable-next-line no-unused-vars
import style from './MyPosts.module.css';

const MyPosts = ({ postsData }) => {

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