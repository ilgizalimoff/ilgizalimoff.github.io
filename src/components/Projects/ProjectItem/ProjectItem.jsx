import React from 'react'
import './ProjectItem.css'

export default function Project({ project }) {
    return (
        <div className="project_content">
            <div className="project_title">
                {project.title}
            </div>
            <div className="project_description">
                {project.body}
            </div>
            <div className="project_link">
                <a href={project.linkGithiub}>Открыть исходники</a>
                <a href={project.linkTry}>Попробовать</a>
            </div>
        </div>
    )
}
