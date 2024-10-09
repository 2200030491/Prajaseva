import React from 'react'
import home from '../images/Home.png'
import pic1 from '../images/Pic1.png'
import pic2 from '../images/Pic2.png'
import pic3 from '../images/Pic3.png'
import pic4 from '../images/Pic4.png'
export default function Home() {
  return (
    <div>
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Connecting Citizens and Leaders for a Better Tomorrow!</h1>
            <p>
              Welcome to a platform that strengthens the relationship between you and your
              elected representatives. Report issues that matter, provide valuable feedback, and
              stay updated on the actions and responses from your leaders. Together, we can drive
              transparency, accountability, and meaningful change in our communities.
            </p>
            <button className="raise-issue">Raise an issue</button>
            <button className="register-now">Register now</button>
          </div>
          <div className="hero-image">
            <img src={home} alt="Home" />
          </div>
        </section>

        <section className="recent-issues">
          <h2>Recent issues</h2>
          <div className="issues-grid">
            <div className="issue-card">
              <img src={pic1} alt="Pic1 " />
              <p>Damaged Road</p>
              <p>Posted 2 hours ago</p>
              <p>The road on Elm Street is filled with potholes.</p>
            </div>
            <div className="issue-card">
              <img src={pic2} alt="Pic2" />
              <p>Blocked Drainage</p>
              <p>Posted 1 day ago</p>
              <p>Blocked drainage on Maple Avenue.</p>
            </div>
            <div className="issue-card">
              <img src={pic3} alt="Pic3" />
              <p>Water Shortage</p>
              <p>Posted 2 hours ago</p>
              <p>There is no water supply in Vijayawada.</p>
            </div>
            <div className="issue-card">
              <img src={pic4} alt="Pic4"/>
              <p>Damaged Road</p>
              <p>Posted 2 hours ago</p>
              <p>The road is full of holes and water logged.</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
