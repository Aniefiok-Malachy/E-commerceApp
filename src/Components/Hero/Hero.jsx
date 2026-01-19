import React from 'react'
import './Hero.css'
import hand from "../Assets/hand-icon.png";
import arrow from "../Assets/arrow-icon.png";
import hero from "../Assets/hero1.png"

export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVAL ONLY</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>New</p>
                    <img src={hand} alt='' />
                </div>
                <p>Collections</p>
                <p>Collections for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collections</div>
                <img src= {arrow} alt='' />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero} alt='' />
        </div>
    </div>
  )
}
