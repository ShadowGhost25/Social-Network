import React from 'react';
import Posts from './Posts/Posts';
import style from './MyPosts.module.css';

const MyPosts = ({ stateProfilePage, updateNewPostTextCreator, addPost }) => {
	let postsElement = stateProfilePage.postsData.map(p => <Posts key={p.id} message={p.message} likeCount={p.likescount} />)

	let newPostElement = React.createRef();

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
				<textarea placeholder='Добавь свой новый пост' onChange={onPostChange} ref={newPostElement} value={stateProfilePage.newPostText} cols="30" rows="5" />
			</div>
			<div className={style.main}>
				<button onClick={() => { addPost() }}> Опубликовать пост </button>
			</div>
			<div className={style.main}>
				{postsElement}
			</div>
		</div>
	)
}
export default MyPosts 