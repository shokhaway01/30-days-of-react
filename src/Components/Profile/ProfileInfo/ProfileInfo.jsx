import React from 'react'

import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
  return (
    <div>
        <div>
            <img className={s.content_image} src="https://avatars.mds.yandex.net/i?id=62c716cb93778ff6753e0b32ed02f54c43dc4b28-5513384-images-thumbs&n=13" alt=""/>
        </div>

        <div>
            ava+description
        </div>

    </div>
  )
}

export default ProfileInfo