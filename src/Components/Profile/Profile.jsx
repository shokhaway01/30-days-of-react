import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './My Posts/MyPostsContainer'

const Profile = (props) => {
    
    

    return (
        <article>

            <div className={s.container}>

                <ProfileInfo />


                <MyPostsContainer store={props.store}/>

            </div>

        </article>
    )
}


export default Profile

