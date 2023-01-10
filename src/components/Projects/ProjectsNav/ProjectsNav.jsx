import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostService from '../../../API/PostService'
import { arrayProjectsCategories } from '../../../constants/constants'
import classes from './ProjectsNav.module.css'

export default function ProjectsNav() {
    const dispatch = useDispatch()

    const activeIndex = useSelector(state => state.activeCatReducer.activeElement)
    const setActiveCat = (index, sortType) => {
        dispatch({ type: 'SET_ACTIVE_CAT', payload: index })

        sortType !== 'all'
            ? dispatch(PostService.getProjectsByType(sortType))
            : dispatch(PostService.getProjects())
    }

    return (
        <div className={classes.projects_nav_container}>
            <div className={classes.projects_nav}>
                {arrayProjectsCategories.map((cat, index) =>
                    <li key={cat.id}
                        onClick={() => setActiveCat(index, cat.sort)}
                        className={index == activeIndex
                            ? classes.category +' '+ classes.active
                            : classes.category}>
                        {cat.value}
                    </li>
                )}
            </div>
        </div >
    )
}
