import React, {useState } from 'react';
import './Projects.css'
import Project from './ProjectItem/ProjectItem'
import axios from 'axios'

export default function Projects() {
  const [appState, setAppState] = useState([]);
  const url = 'https://my-json-server.typicode.com/ilgizalimoff/server/links'

  axios.get(url).then((resp) => {
    setAppState(resp.data)
  })

  return (
    <div className='Projects'>
      <div className="Projects_container">
        {appState.map(project => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  )
}
