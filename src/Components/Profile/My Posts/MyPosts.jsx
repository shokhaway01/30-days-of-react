import React from 'react'
import s from './MyPosts.module.css'

import Post from './Post/Post'

const MyPosts = () => {

    let postData = [
        {id:1, message:"Hello",likesCount:15},
        {id:2, message:"Aslonov 5-6ta chiqib qolar dedi",likesCount:20},
        {id:3, message:"Shoh u're awesome",likesCount:30},
        {id:4, message:"I,m your fan!!",likesCount:990},
        {id:5, message:"lorem ipsum dolor sit amet vinca visca barcs visca cataloniya",likesCount:0},
    ]

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
                <Post message={postData[0].message} likes={postData[0].likesCount} />
                <Post message={postData[1].message} likes={postData[1].likesCount} />
                <Post message={postData[2].message} likes={postData[2].likesCount} />
                <Post message={postData[3].message} likes={postData[3].likesCount} />
                <Post message={postData[4].message} likes={postData[4].likesCount} />
                
                
            </div>

        </div>
    )
}

export default MyPosts