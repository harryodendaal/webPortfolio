import React from 'react'
import './styles.css'

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact container">
        <div>
          <h1 className="section-title">Contact <span>info</span></h1>
        </div>
        <div className="contact-items">
          <div className="contact-item">
            <div className="icon">
              <img src="https://img.icons8.com/bubbles/50/000000/phone.png" alt='img' />
            </div>
            <div className="contact-info">
              <h1>Phone</h1>
              <h2>+0713137491</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img src="https://img.icons8.com/clouds/50/000000/email.png" alt='img' />
            </div>
            <div className="contact-info">
              <h1>Email</h1>
              <h2>harrywillyodendaal@gmail.com</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img src="https://img.icons8.com/color/48/000000/mars-planet.png" alt='img' />
            </div>
            <div className="contact-info">
              <h1>Address</h1>
              <h2>South Africa, Western Cape, Bellville, Mars, Remote</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
