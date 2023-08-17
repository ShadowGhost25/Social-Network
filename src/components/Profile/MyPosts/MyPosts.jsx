/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Posts from './Posts/Posts';
// eslint-disable-next-line no-unused-vars
import style from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';

const MyPosts = ({ dispatch, profilePage }) => {
	let postsElement = profilePage.postsData.map(p => <Posts key={p.id} message={p.message} likeCount={p.likescount} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		let action = updateNewPostTextCreator(text)
		dispatch(action);
	}

	return (
		<div>
			<div className={style.main}>
				Мои посты
			</div>
			<div className={style.main}>
				<textarea onChange={onPostChange} ref={newPostElement} value={profilePage.newPostText[0].message} cols="30" rows="5" />
			</div>
			<div className={style.main}>
				<button onClick={addPost}> Опубликовать пост </button>
			</div>
			<div className={style.main}>
				{postsElement}
			</div>
		</div>
	)
}
export default MyPosts 