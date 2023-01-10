import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { arrayCategiries } from '../../../constants/constants'
import classes from './PostsNav.module.css'

export default function PostNav() {
  const activeIndex = useSelector(state => state.activeCatReducer.activeElement)
  const dispatch = useDispatch()

  const setActiveCat = (index) => {
    dispatch({ type: 'SET_ACTIVE_CAT', payload: index })
  }

  return (
    <div className={classes.posts_nav_container}>
      <div className={classes.posts_nav}>
        {arrayCategiries.map((cat, index) =>
          <li key={cat.id} onClick={() => setActiveCat(index)}
            className={index == activeIndex
              ? classes.category + ' ' + classes.active
              : classes.category}>
            {cat.value}
          </li>
        )}
      </div >
    </div >
  )
}
