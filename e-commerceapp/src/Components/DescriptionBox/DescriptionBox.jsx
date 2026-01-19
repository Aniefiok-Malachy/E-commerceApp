import React from 'react'
import "./DescriptionBox.css"

export default function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>        
        </div>
        <div className="descriptionbox-description">
            <p>
                NFTs are revolutionizing the digital marketplace, offering collectors unique ownership of art, music, and virtual assets. Each token represents a one‑of‑a‑kind creation that cannot be duplicated, making it a rare investment opportunity for buyers seeking exclusivity and innovation.
                By purchasing an NFT, you gain verified proof of authenticity through blockchain technology. This ensures your digital asset is secure, transparent, and permanently recorded, giving you confidence in its value and long‑term potential.
            </p>
            <p>
                NFTs are more than collectibles—they’re gateways to communities, experiences, and future opportunities. Many projects offer perks such as access to private events, exclusive content, or even royalties, making ownership both profitable and engaging.
                Artists and creators are embracing NFTs as a way to connect directly with buyers. Owning one means supporting creativity while holding a digital masterpiece that can appreciate in value over time. It’s art, investment, and innovation combined.
            </p>

        </div>
    </div>
  )
}
