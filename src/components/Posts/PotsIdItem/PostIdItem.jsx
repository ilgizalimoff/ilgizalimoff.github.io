import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PostService from '../../../API/PostService';
import classes from './PostIdItem.module.css'

export default function PostIdItem() {
    const params = useParams()
    const dispatch = useDispatch()
    const postById = useSelector(state => state.getPostByIdReducer.postById)
    const comments = useSelector(state => state.getPostByIdReducer.comments)

    useEffect(() => {
        dispatch(PostService.getPostById(params.id))
        dispatch(PostService.getCommentsById(params.id))
    }, [params.id])

    return (
        <div className={classes.comments_container}>

            <div className={classes.post_title}>
                {postById.title}
            </div>

            <div className={classes.post_body}>
                {postById.body}
            </div>

            <div className={classes.writing_comments}>

                <textarea placeholder='Введите комментарий' />

                <div className={classes.comment_area_btns}>
                    <button >Добавить комментарий</button>
                    <button>Отмена</button>
                </div>

            </div>

            <div className={classes.post_comments}>
                Комментарии
                {comments.map(com =>
                    <div key={com.id} className={classes.comment}>
                        <div className={classes.wrapper}>
                            <h3>{com.name}</h3>
                            <div className={classes.time}>{Date.now()} назад</div>
                        </div>


                        <div>{com.body}</div>

                    </div>
                )}
            </div>

        </div>
    )
}
