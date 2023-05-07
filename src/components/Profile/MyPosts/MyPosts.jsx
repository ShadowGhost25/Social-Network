/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Posts from './Posts/Posts';
// eslint-disable-next-line no-unused-vars
import style from './MyPosts.module.css';

const MyPosts = () => {
	return (
		<div>
			<div>
				My post
			</div>
			<div>
				new post
			</div>
			<div className='posts'>
				<Posts message="Hi how are you" likeCount="62" />
				<Posts message="It`s my first post" likeCount="51" />
			</div>
		</div>
	)
}
export default MyPosts