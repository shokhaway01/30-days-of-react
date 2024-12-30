import React from 'react'
import s from './MyPosts.module.css'

import Post from './Post/Post'

const MyPosts = (props) => {

    let newPostData = React.createRef();

    let addpost = () => {
        if (newPostData.current.value !== " " || newPostData.current.value !== "") {
            props.addPost()
        }else{
            alert('Error')
        }
    }


    let onPostChange = () =>{
        props.updatePostText(newPostData.current.value);
    }




    return (
        <div>

            <div className={s.postCreate}>



                <textarea name="" id="" ref={newPostData} placeholder='Введите текст' value={props.newPostText} onChange={onPostChange}>

                </textarea>


                {/* {console.log(props)} */}


                <button className={s.addPost} onClick={addpost}>Созодать пост 📩</button>


            </div>


            <div className={s.myPostSlogan}>
                My posts:
            </div>

            <div className={s.postsContainer}>

                {props.postData.map(post => <Post message={post.message} likes={post.likesCount} />)}




            </div>

        </div>
    )
}

export default MyPosts