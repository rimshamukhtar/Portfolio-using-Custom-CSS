import React from 'react'
import ".//Projects.css"
import Image from 'next/image'
import ATM from "../../public/ATM pic.jpg"
import calculator from "../../public/calculator.jpg"
import currencyconverter from "../../public/currency converter.webp"
import numberguessing from "../../public/number guessing.jpg"
import todolist from "../../public/to-do-list.jpg"
import wordcounter from "../../public/word counter.png"
const Projects = () => {
  return (
    <div className='container3'>
      <div className='item'>
        <div className='pic'> 
          <img id='picture' src="/ATM pic.jpg" alt="" /></div>
        <div className='text-pro'>
          <h2>ATM Machine</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem tenetur asperiores aliquid 
</p>
        </div>
      </div>
      <div className='item'>
      <div className='pic'>
        <img id='picture' src="/word counter.png" alt="" />
      </div>
        <div className='text-pro'>
          <h2>Word Counter</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem tenetur asperiores aliquid </p>
        </div>
      </div>
      <div className='item'>
      <div className='pic'>
      <img id='picture' src="/calculator.jpg" alt="" />
      </div>
        <div className='text-pro'>
          <h2>Simple Calculator</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem tenetur asperiores aliquid</p>
        </div>
      </div>
      <div className='item'>
      <div className='pic'>
      <img id='picture' src="/currency converter.webp" alt="" />
      </div>
        <div className='text-pro'>
          <h2>Currency Converter</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem tenetur asperiores aliquid</p>
        </div>
      </div>
      <div className='item'>
      <div className='pic'>
      <img id='picture' src="/number guessing.jpg" alt="" />
      </div>
        <div className='text-pro'>
          <h2>Number Guessing Game</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem tenetur asperiores aliquid e</p>
        </div>
      </div>
      <div className='item'>
      <div className='pic'>
      <img id='picture' src="/to-do-list.jpg" alt="" />
      </div>
        <div className='text-pro'>
          <h2>To-do-List</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem tenetur asperiores aliquid</p>
        </div>
      </div>
      
    </div>
  )
}

export default Projects
