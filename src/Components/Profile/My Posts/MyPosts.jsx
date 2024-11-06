import React from 'react'
import s from './MyPosts.module.css'

import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
          <textarea name="" id="">
            
          </textarea>

                <button>Add Post</button>
                <button>Remove</button>


            </div>

            <div className={s.postsContainer}>
                <Post/>
            </div>

        </div>
    )
}

export default MyPosts