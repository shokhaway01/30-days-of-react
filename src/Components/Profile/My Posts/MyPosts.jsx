import React from 'react'
import s from './MyPosts.module.css'

import Post from './Post/Post'

const MyPosts = (props) => {

let newPostData = React.createRef();

let addpost = () =>{
    alert(newPostData.current.value)
}





    return (
        <div>
            
            <div className={s.postCreate}>
                
              

                    <textarea name="" id="" ref={newPostData} >
            
                    </textarea>





                
                <button className={s.addPost} onClick={addpost}>📩</button>


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