import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src="/img/img-2.png" alt="img" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">About <span>me</span></h1>
          <h2>FullStack Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            at cupiditate voluptatem nihil debitis doloribus libero porro est ab
            alias! Architecto ipsa expedita laudantium sequi vero beatae quam
            mollitia asperiores.
        </p>
          <a href="#home" className="cta">Download Resume</a>
        </div>
      </div>
    </section>
  )
}

export default About
