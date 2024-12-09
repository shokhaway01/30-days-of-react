import React from 'react'
import MyPosts from './My Posts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <article>

            <div className={s.container}>

                <ProfileInfo/> 

                <MyPosts postData={props.postData}/>

            </div>

        </article>
    )
}

export default Profile