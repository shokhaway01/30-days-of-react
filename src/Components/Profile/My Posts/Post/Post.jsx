import React from 'react'
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.postBody}>

            <div className={s.container}>


{/* Верхняя часть */}
                <div className={s.topSide}>
                
                <div className={s.imageContainer}>
                    <img src="https://avatars.yandex.net/get-music-content/4446014/a0ed6929.a.18972112-1/m1000x1000?webp=false" alt="" width='50px'/>

                    <div className={s.data}>

                        23:59

                    </div>

                </div>

                <div className={s.toolsList}>
                    <div>
                        редактировать/удалить
                    </div>
                </div>

                </div>
                
{/* Нижняя часть */}
                
                <div className={s.bottomSide}>
                    <div className={s.chast}>
                    <hr />
                        <div className={s.postText}>
                            {props.message}    
                        </div>

                    <hr />
                    </div>

                    <div className={s.reactions}>
                        <div>
                        {props.likes}💖
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}


export default Post