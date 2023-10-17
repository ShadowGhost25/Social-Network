import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import style from './Profile.module.css';

const Profile = ({ profile }) => {
	// console.log(profile)
	return (
		<div>
			<ProfileInfo profile={profile} />
			<MyPostsContainer />
		</div>
	)
}
export default Profile