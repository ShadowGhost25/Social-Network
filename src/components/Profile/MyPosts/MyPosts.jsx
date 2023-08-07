/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Posts from './Posts/Posts';
// eslint-disable-next-line no-unused-vars
import style from './MyPosts.module.css';

const MyPosts = (props) => {

	let postsElement = props.postsData.map(p => <Posts key={p.id} message={p.message} likeCount={p.likescount} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = " "
	}

	return (
		<div>
			<div className={style.main}>
				My post
			</div>
			<div className={style.main}>
				<textarea ref={newPostElement} cols="30" rows="5"></textarea>
			</div>
			<div className={style.main}>
				<button onClick={addPost}> Add post</button>
			</div>
			<div className={style.main}>
				{postsElement}
			</div>
		</div>
	)
}
export default MyPosts