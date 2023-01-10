import React from 'react'
import classes from './ProjectItem.module.css'

export default function ProjectItem({ project }) {
    return (
        <div className={classes.project_content}>

            <div className={classes.project_title}>
                {project.title}
            </div>

            <div className={classes.project_description}>
                {project.body}
            </div>

            <div className={classes.project_link}>
                {project.hasOwnProperty('linkTry')
                    ? <>
                        <a href={project.linkGithiub}>Открыть исходники</a>
                        <a href={project.linkTry}>Попробовать</a>
                    </>
                    : <a href={project.linkGithiub}>Открыть исходники</a>
                }
            </div>
        </div>
    )
}
