import React from 'react';
import Posts from './Posts/Posts';
import style from './MyPosts.module.css';

const MyPosts = ({ profilePage, updateNewPostTextCreator, addPost }) => {
	let postsElement = profilePage.postsData.map(p => <Posts key={p.id} message={p.message} likeCount={p.likescount} />)

	let newPostElement = React.createRef();

	let onAddPost = () => {
		addPost()
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		updateNewPostTextCreator(text)
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
				<button onClick={onAddPost}> Опубликовать пост </button>
			</div>
			<div className={style.main}>
				{postsElement}
			</div>
		</div>
	)
}
export default MyPosts 