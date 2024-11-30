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
                <Post message={'Hello'} likes="15" />
                <Post message={"Shoh u're awesome"}/>
                <Post message={"I,m your fan!!"}/>
                <Post message={"lorem ipsum dolor sit amet vinca visca barcs visca cataloniya"}/>
                
            </div>

        </div>
    )
}

export default MyPosts