import React, { useEffect } from 'react';
import classes from './Projects.module.css'
import ProjectItem from './ProjectItem/ProjectItem'
import { useDispatch, useSelector } from 'react-redux';
import PostService from '../../API/PostService';
import ProjectsNav from './ProjectsNav/ProjectsNav';

export default function Projects() {
  const dispatch = useDispatch()
  const projects = useSelector(state => state.getProjectsReducer.projects)

  useEffect(() => {
    dispatch(PostService.getProjects())
  }, [])

  return (
    <div className={classes.projects}>
      
      <ProjectsNav />
      
      <div className={classes.projects_container} >
        {projects.length
          ?
          projects.map(project => (
            <ProjectItem project={project} key={project.id} />
          ))
          : <h1>Таких нет</h1>
        }
      </div >

    </div>
  )
}
