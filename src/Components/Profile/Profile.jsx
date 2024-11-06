import React from 'react'
import MyPosts from './My Posts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <article className={s.content}>

            <div className={s.container}>

                <div>
                    <img className={s.content_image}
                         src="https://avatars.mds.yandex.net/i?id=62c716cb93778ff6753e0b32ed02f54c43dc4b28-5513384-images-thumbs&n=13"
                         alt=""/>
                </div>

                <div>
                    ava+description
                </div>

                <MyPosts/>

            </div>

        </article>
    )
}

export default Profile