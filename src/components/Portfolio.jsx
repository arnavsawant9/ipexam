import React from 'react'
import datas from "./data"
import Project from "./Project"

function Portfolio() {
  return (
    <div>
        <h1>Portfolio</h1>
        <div>
            {datas.map(data=>(
                <Project
                key={data.id}
                title={data.title}
                id={data.id}
                />
            ))}
        </div>
    </div>
  )
}

export default Portfolio