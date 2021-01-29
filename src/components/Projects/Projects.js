import React, { useState, useEffect } from 'react'
import './project.css'
import './search.css'
import projects from './projects.json'
import { IoLogoGithub, IoEyeOutline } from 'react-icons/io5'

import Fuse from 'fuse.js'

const Projects = () => {
  const [query, updateQuery] = useState("")
  const fuse = new Fuse(projects, {
    keys: [
      'description_general',
      'description_technical',
      'tags'
    ]
  })
  const results = fuse.search(query)
  const projectResults = results.map(proj => proj.item)

  useEffect(() => {
    updateQuery('all#69420')
  }, [])

  function onSearch({ currentTarget }) {
    console.log(currentTarget.value)
    if (currentTarget.value === "") {
      updateQuery("all#69420")
      console.log('he')
    } else {
      updateQuery(currentTarget.value);
      console.log('ttt')
    }
  }

  return (
    <>
      <div class="search__container">
        <div class="searchbox">
          <input type="text" value={query === 'all#69420' ? '' : query} onChange={onSearch} class="searchbox__input" placeholder="Search..." />
          <svg
            class="searchbox__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56.966 56.966"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </div>
      </div>

      <div id='projects'>
        <div className='projects-container'>

          {projectResults.map(project => (
            <div class="card">
              <div class={"card__inner "} >
                <div class="card__face card__face--front">
                  <img src={project.img} alt="" class="pp" />
                </div>

                <div class="card__face card__face--back">
                  <div class="card__content">
                    <div class="card__header">
                      <h2>
                        {project.header}
                      </h2>
                    </div>
                    <div class="card__body">
                      <h3>General: </h3>
                      <p className='general'>
                        {project.description_general}
                      </p>
                      <h3>Technical:</h3>
                      <p className='technical'>
                        {project.description_technical}
                      </p>
                    </div>
                    <div className='links'>
                      <a target='_blank' rel="noreferrer" href={project.githublink}> <IoLogoGithub className='icon' /></a>
                      {project.header !== 'bookReview' ? <a target='_blank' rel="noreferrer" href={project.demolink}><IoEyeOutline className='icon' /></a> : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
