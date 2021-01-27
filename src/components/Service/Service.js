import React from 'react'
import './styles.css'
const Service = () => {
  return (
    <section id="services">
      <div className="services container">
        <div className="service-top">
          <h1 className="section-title">Serv<span>i</span>ces</h1>
        </div>
        <div className="service-bottom">
          <div className="service-item">
            <div className="icon">
              <img src="https://img.icons8.com/dusk/64/000000/web-design.png" alt='frontend' />
            </div>
            <h2>FRONT END</h2>
            <ul>
              <li>HTML</li>
              <li>CSS | SASS</li>
              <li>javascript | TypeScript</li>
              <li>React (next) | Vue</li>
              <li> Redux | Urql</li>
            </ul>
          </div>
          <div className="service-item">
            <div className="icon">
              <img src="https://img.icons8.com/dusk/64/000000/server.png" alt='server' />
            </div>
            <h2>Server</h2>
            <ul>
              <li>NodeJs</li>
              <li>Express</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="service-item">
            <div className="icon">
              <img src="https://img.icons8.com/dusk/64/000000/database-restore.png" alt='database' />
            </div>
            <h2>DataBase</h2>
            <p>
              <ul>
                <li>Relational Databases: postgres, mysql</li>
                <li>Non-Relational Databases: firebase, mongoose</li>
                <li>key-value Databases: redis</li>
              </ul>
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <img src="https://img.icons8.com/dusk/64/000000/cloud.png" alt='deployment' />
            </div>
            <h2>Deployment</h2>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>nginx?</li>
              <li>aws?</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
