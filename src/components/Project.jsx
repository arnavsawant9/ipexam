import React from 'react'


function Project({id, title}) {
  return (
    <div>
        <h1>Project</h1>
        <p>{title}</p>
        <p>{id}</p>
    </div>
  )
}

export default Project;