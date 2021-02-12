import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// import './styles.css'
import { IoLogoGithub, IoEyeOutline } from 'react-icons/io5'



const ProjectItem = (project) => {
  const [state, setState] = useState(project)

  useEffect(() => {
    setState(project)
  }, [project])

  return (
    <>



      <div class="card">
        <div class={"card__inner "} >
          <div class="card__face card__face--front">
            <img src={state.project.img} alt="" class="pp" />
          </div>

          <div class="card__face card__face--back">
            <div class="card__content">
              <div class="card__header">
                <h2>
                  {state.project.header}
                </h2>
              </div>
              <div class="card__body">
                <h3>General: </h3>
                <p className='general'>
                  {state.project.description_general}
                </p>
                <h3>Technical:</h3>
                <p className='technical'>
                  {state.project.description_technical}
                </p>
              </div>
              <div className='links'>
                <a target='_blank' rel="noreferrer" href={state.project.githublink}> <IoLogoGithub className='icon' /></a>
                {state.project.header !== 'bookReview' ? <a target='_blank' rel="noreferrer" href={state.project.demolink}><IoEyeOutline className='icon' /></a> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectItem
