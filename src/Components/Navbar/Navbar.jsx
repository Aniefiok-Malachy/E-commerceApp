import React from 'react'
import {Link} from "react-router-dom";
import logo from "../Assets/logo.png";
import Cart from "../Assets/Nft-Cart.png"
import "./Navbar.css"

export default function Navbar() {
    const [menu, setMenu]= React.useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt='logo' className='logo-img'/>
            <p>SHOPPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link style ={{testDecoration: 'none'}} to ="/">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}> <Link style ={{testDecoration: 'none'}} to ="/men"> Men</Link> {menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style ={{testDecoration: 'none'}} to ="/women">Women</Link> {menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style ={{testDecoration: 'none'}} to ="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <Link to ="/login"><button>Login</button></Link> 
        <Link to ="/cart"><img src={Cart} alt='Cart' className='cart-img'/></Link> 
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
