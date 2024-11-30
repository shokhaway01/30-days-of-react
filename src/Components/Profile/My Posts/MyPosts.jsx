import React from 'react'
import s from './MyPosts.module.css'

import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            
            <div className={s.postCreate}>
                
              

                    <textarea name="" id="" >
            
                    </textarea>



                
                <button className={s.addPost}>📩</button>


            </div>


            <div className={s.myPostSlogan}>
                My posts:
            </div>

            <div className={s.postsContainer}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                
            </div>

        </div>
    )
}

export default MyPosts