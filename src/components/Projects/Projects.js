import React from 'react'
import projects from './projects.json'
const Projects = () => {
  console.log(projects)
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">Recent <span>Projects</span></h1>
        </div>
        <div className="all-projects">
          {projects.map(project => (
            <div className="project-item">
              <div className="project-info">
                <h1>{project.header}</h1>
                <p>
                  {project.description}
                </p>
              </div>
              <div className="project-img">
                <img src={project.img} alt="img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
