import React from 'react'
import "./Breadcrum.css"
import arrow_icon from "../Assets/Arow.png";

export default function Breadcrum({ product }) {
  if (!product) {
    return null;
  }

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt=''/> 
      SHOP <img src={arrow_icon} alt='' /> 
      {product.category}
      <img src={arrow_icon} alt=''/>
      {product.name}
    </div>
  );
}
