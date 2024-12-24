import React from 'react'
import s from './MyPosts.module.css'

import Post from './Post/Post'

const MyPosts = (props) => {

   
    return (
        <div>
            
            <div className={s.postCreate}>
                
              

                    <textarea name="" id="" >
            
                    </textarea>



                
                <button className={s.addPost} onClick={() => alert('Кнопвка работает')}>📩</button>


            </div>


            <div className={s.myPostSlogan}>
                My posts:
            </div>

            <div className={s.postsContainer}>

                {props.postData.map( post => <Post message={post.message} likes={post.likesCount}/> )}

              
                
                
            </div>

        </div>
    )
}

export default MyPosts