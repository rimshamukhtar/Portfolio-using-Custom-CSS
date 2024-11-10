import React from 'react'
import ".//Home.css"
import Image from 'next/image'
import bannerimage from "../../public/rimsha.jpg"

const Home = () => {
  return (
    <div className='container1'>
      <div className='imagecontainer'>
      <img id='homepic' src="/rimsha.jpg" alt="bannerimage"  />
      </div>
      <div className='content'>
        <h1>Hello, I'm Rimsha</h1>
        <p>Hello! I'm Rimsha Fatima, a dedicated and creative Web Developer with a flair for building interactive and visually engaging web applications. My journey in web development began with a strong foundation in HTML, CSS, JavaScript, React.js and TypeScript, and I'm continually expanding my skill set to bring innovative solutions to life. Currently, I'm diving into Next.js to deepen my knowledge and explore advanced front-end possibilities.</p>
      </div>
      <div>
      <button className='button1'>Contact With Me</button>
      <button className='button2'>Resume</button>
      </div>
    
    </div>
  )
}

export default Home
