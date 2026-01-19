import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/Starfill.png";
import stardull_icon from "../Assets/star_dull.png";
import { ShopContext } from '../../Context/ShopContext';



export default function ProductDisplay(props) {
    const {product} = props;
    const {addToCart}= useContext(ShopContext);

    if (! product){
        return null;
    }
    
  return (
    <div className='productdisplay'>
        <div className="productdisplay-lelt">
            <div className="productdisplay-image-list">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="productdisplay-image">
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={stardull_icon} alt='' />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-old-price">${product.old_price}</div>
                <div className="productdisplay-right-new-price">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            Unique digital collectible, blending art and innovation. 
            Own rare blockchain-secured creation, perfect for collectors seeking value and exclusivity.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Catgory :</span>Art NFT</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern NFT</p>
            </div>
        </div>
    </div>
  )
}
