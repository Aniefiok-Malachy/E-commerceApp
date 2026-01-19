import React from 'react'
import './Hero.css'
import hand from "../Assets/hand1.png";
import arrow from "../Assets/Arow.png";
import hero from "../Assets/Heroo1.png"

export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2 className='hero-left-hand'>NEW ARRIVAL ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand} alt='' />
                </div>
                <p>Collections for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div className='Latest-collect'>Latest Collections</div>
                <img src= {arrow} alt='' />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero} alt='' className='hero-girl' />
        </div>
    </div>
  )
}
