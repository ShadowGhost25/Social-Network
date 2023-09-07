import React from 'react';
import Posts from './Posts/Posts';
import style from './MyPosts.module.css';

const MyPosts = ({ stateProfilePage, updateNewPostTextCreator, addPost }) => {
	console.log(stateProfilePage.postsData);
	let postsElement = stateProfilePage.postsData.map(p => <Posts key={p.id} message={p.message} likeCount={p.likescount} />)

	let newPostElement = React.createRef();

	let onAddPost = () => {
		addPost()
		console.log("helo", stateProfilePage.postsData)
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
				<textarea onChange={onPostChange} ref={newPostElement} value={stateProfilePage.newPostText[0].message} cols="30" rows="5" />
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