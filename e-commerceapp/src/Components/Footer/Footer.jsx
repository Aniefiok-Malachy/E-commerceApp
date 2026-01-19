import React from 'react'
import "./Footer.css"
import footer from "../Assets/logo.png";
import instagram_icon from "../Assets/insta-icon.png"
import telegram_icon from "../Assets/teleg-icon.png"
import telephone_icon from "../Assets/telephon-icon.png"
import twitter_icon from "../Assets/twitt-icon.png"
import ticktok_icon from "../Assets/Ticktok-icon.png"
import whatsapp_icon from "../Assets/wahtaspp-icon.png"



export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer} alt='' />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt='' />
            </div>
            <div className="footer-icon-container">
                <img src={telegram_icon} alt='' />
            </div>
            <div className="footer-icon-container">
                <img src={telephone_icon} alt='' />
            </div>
            <div className="footer-icon-container">
                <img src={ticktok_icon} alt='' />
            </div>
            <div className="footer-icon-container">
                <img src={twitter_icon} alt='' />
            </div>
            <div className="footer-icon-container">
                <img src={instagram_icon} alt='' />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>copyright @ 2026 -All Right Reserved</p>
        </div>
    </div>
  )
}
