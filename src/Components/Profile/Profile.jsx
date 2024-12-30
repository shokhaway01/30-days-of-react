import React from 'react'
import MyPosts from './My Posts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <article>

            <div className={s.container}>

                <ProfileInfo />

            {console.log(props)}

                <MyPosts updatePostText={props.updatePostText} postData={props.state.postData} addPost={props.addPost} newPostText={props.state.newPostText} />

            </div>

        </article>
    )
}

export default Profile

