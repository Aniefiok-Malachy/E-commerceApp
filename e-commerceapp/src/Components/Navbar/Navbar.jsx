import React, { useContext } from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom";
import logo from "../Assets/logo.png";
import Cart from "../Assets/Nft-Cart.png"
import "./Navbar.css"
import { ShopContext } from '../../Context/ShopContext';

export default function Navbar() {
    const [menu, setMenu]= useState("shop")
    const {getTotalCartItems} =useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt='logo' className='logo-img'/>
            <p>SHOPPPER NFT</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link style ={{testDecoration: 'none'}} to ="/">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("art")}}> <Link style ={{testDecoration: 'none'}} to ="/art"> Arts</Link> {menu==="art"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("gaming")}}><Link style ={{testDecoration: 'none'}} to ="/gaming">Gamings</Link> {menu==="gaming"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("collectible")}}><Link style ={{testDecoration: 'none'}} to ="/collectible">Collectibles</Link> {menu==="collectible"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <Link to ="/login"><button>Login</button></Link> 
        <Link to ="/cart"><img src={Cart} alt='Cart' className='cart-img'/></Link> 
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
