import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src="/img/unknown.jpeg" alt="img" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">About <span>me</span></h1>
          <h2>FullStack Developer</h2>
          <p>
            twenty year old financially dependant student frantically searching for a opportunity to prove that I have useful skills. Also need a job so that I can afford rent for my apartment I promise you I will not dissappoint just give me a chance. ☮️
          </p>
          <a href="#home" className="cta">Download Resume</a>
        </div>
      </div>
    </section>
  )
}

export default About
