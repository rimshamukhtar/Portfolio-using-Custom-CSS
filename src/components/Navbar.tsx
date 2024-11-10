import React from 'react'
import ".//Navbar.css"
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='header'>
    <a id='logo'>Rimsha</a>
    <div className='nav'>
     <Link href="/">Home</Link>
     <Link href="/about">About Me</Link>
     <Link href="/skills">Skills</Link>
     <Link href="/projects">Projects</Link>
     <Link href="/contactus">Contact Me </Link>  
    </div>
      
    </div>
  )
}

export default Navbar
