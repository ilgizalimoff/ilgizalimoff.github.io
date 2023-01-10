import React, { useEffect } from 'react'
import './Posts.module.css'
import PostService from '../../API/PostService'
import { useDispatch, useSelector } from 'react-redux'
import PostNav from './PostsNav/PostNav'
import classes from './Posts.module.css'
import PostItem from './PostItem/PostItem'

export default function Posts() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.getPostsReducer.posts)

  useEffect(() => {
    dispatch(PostService.getPosts())
  }, [])

  return (
    <div className={classes.posts}>
      <PostNav />
      <div className={classes.posts_container}>
        {posts.map(post =>
          <PostItem key={post.id} post={post} />
        )}
      </div>
    </div>
  )
}
