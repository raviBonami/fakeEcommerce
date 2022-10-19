import React from 'react'
import Navbar from '../../source/navbar/Navbar'
import person1 from '../../../shared/images//sellerImg/acSeller.jpeg'
import person2 from '../../../shared/images//sellerImg/fridgeSeller.jpg'
import person3 from '../../../shared/images//sellerImg/geyserSeller.jpeg'
import '../../styles/about.css'

function About() {
  return (
    <div>
      <Navbar />
      <div className='about'>
        <div className='top-about' >
          <h1>ABOUT US</h1>
          <p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat qui atque cumque 
            facere iure commodi veritatis a magni aliquid aliquam, dignissimos sint? Corrupti beatae dolor, 
            obcaecati quaerat blanditiis aspernatur voluptas. </strong></p>
          <p>facere iure commodi veritatis a magni aliquid aliquam, dignissimos sint? Corrupti beatae dolor</p>
        </div>
        <div>
          <h1 style={{color:'white'}} >Our Team</h1>
          <div className='team'>
              <div className='inner-team' >
                <img src={person1} />
                <h1>Tim Pool</h1>
                <h2>CEO and Founder</h2>
                <p>Some text describing me</p>
                <p>example1@gmail.com</p>
                <button>Contact Me</button>
              </div>
              <div className='inner-team' >
                <img src={person2} />
                <h1>Frank Holland</h1>
                <h2>CTO</h2>
                <p>Some text describing me</p>
                <p>example2@gmail.com</p>
                <button>Contact Me</button>
              </div>
              <div className='inner-team' >
                <img src={person3} />
                <h1>Mark Butcher</h1>
                <h2>CFO</h2>
                <p>Some text describing me</p>
                <p>example3@gmail.com</p>
                <button>Contact Me</button>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
