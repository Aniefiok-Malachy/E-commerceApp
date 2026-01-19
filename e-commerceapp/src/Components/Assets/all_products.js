import nft1 from "./Nft1.jpg"
import nft2 from "./Nft2.png"
import nft3  from "./Nft3.jpg"
import nft4 from "./Nft4.jpg"
import nft5 from "./coin.jpg"
import nft6 from "./Ease.jpg"
import nft7 from "./Nft7.jpg"
import nft8 from "./Frek.png"
import nft9 from "./Nft9.jpg"
import nft10 from "./Nft10.jpg"
import nft11 from "./Nft11.jpg"
import nft12 from "./Nft12.jpg"
import nft13 from "./Nft13.jpg"
import nft14 from "./Nft14.jpg"
import nft15 from "./Nft15.jpg"
import nft16 from "./Nft16.jpg"
import nft17 from "./Nft17.jpg"
import nft18 from "./Nft18.png"
import nft19 from "./Nft19.jpg"
import nft20 from "./Nft20.jpg"
import nft21 from "./Nft21.jpg"
import nft22 from "./Nft22.jpg"
import nft23 from "./Nft23.jpg"
import nft24 from "./Nft24.jpg"
import nft25 from "./Nft25.jpg"
import nft26 from "./pix.jpg"
import nft27 from "./Nft27.jpg"
import nft28 from "./Nft28.jpg"
import nft29 from "./Nft29.jpg"
import nft30 from "./Nft30.jpg"
import nft31 from "./lady.jpg"
import nft32 from "./Nft0.jpg"
import w from "./w.jpg";
import w1 from "./w1.jpg";
import w2 from "./w2.jpg";
import w3 from "./w3.jpg";


const all_products = [
  // --- ART (12 items) ---
  { id: 1, name: "(Cyber Ape): Digital beast ruling neon jungle", category: "art", image: nft1, new_price: 120, old_price: 180 },
  { id: 2, name: "(Pixel Punk): Retro rebel breaking digital limits", category: "art", image: nft2, new_price: 90, old_price: 140 },
  { id: 3, name: "(Neon Skull): Glowing symbol of eternal rebellion", category: "art", image: nft4, new_price: 60, old_price: 95 },
  { id: 4, name: "(Holo Vision): Futuristic lens revealing hidden truths", category: "art", image: nft9, new_price: 40, old_price: 65 },
  { id: 5, name: "(Dark Realm): Shadow world consuming digital souls", category: "art", image: nft10, new_price: 95, old_price: 140 },
  { id: 6, name: "(Cyber Queen): Ruling monarch of digital empires", category: "art", image: nft13, new_price: 210, old_price: 300 },
  { id: 7, name: "(Chain Spirit): Mystical force binding blockchain souls", category: "art", image: nft18, new_price: 25, old_price: 40 },
  { id: 8, name: "(Void Watcher): Eternal guardian of cosmic emptiness", category: "art", image: nft21, new_price: 70, old_price: 110 },
  { id: 9, name: "(Pixel Pharaoh): Ancient ruler reborn in pixels", category: "art", image: nft26, new_price: 95, old_price: 145 },
  { id: 10, name: "(Punkky): Playful spirit thriving in digital chaos", category: "art", image: nft32, new_price: 80, old_price: 150 },
  { id: 11, name: "(Fox Huntress): Agile archer guarding enchanted forests", category: "art", image: w, new_price: 165, old_price: 230 },
  { id: 12, name: "(Cyber Empress): Regal ruler of digital kingdoms", category: "art", image: w1, new_price: 220, old_price: 310 },

  // --- GAMING (12 items) ---
  { id: 13, name: "(Meta Samurai): Warrior slicing through virtual realms", category: "gaming", image: nft3, new_price: 45, old_price: 70 },
  { id: 14, name: "(Crypto Knight): Guardian defending blockchain kingdoms", category: "gaming", image: nft6, new_price: 110, old_price: 160 },
  { id: 15, name: "(Virtual Racer): Speed demon ruling digital tracks", category: "gaming", image: nft7, new_price: 85, old_price: 130 },
  { id: 16, name: "(Pixel Beast): Fierce monster born from pixels", category: "gaming", image: nft11, new_price: 30, old_price: 50 },
  { id: 17, name: "(Block Titan): Giant protector of digital realms", category: "gaming", image: nft19, new_price: 90, old_price: 130 },
  { id: 18, name: "(Neon Runner): Speeding hero glowing through night", category: "gaming", image: nft23, new_price: 65, old_price: 100 },
  { id: 19, name: "(Cyber Wolf): Fierce hunter roaming digital forests", category: "gaming", image: nft27, new_price: 80, old_price: 120 },
  { id: 20, name: "(Neural Core): Power source driving AI evolution", category: "gaming", image: nft14, new_price: 45, old_price: 70 },
  { id: 21, name: "(AI Genesis): Birthplace of intelligent creations", category: "gaming", image: nft15, new_price: 35, old_price: 60 },
  { id: 22, name: "(Data Monk): Wise sage mastering digital knowledge", category: "gaming", image: nft24, new_price: 55, old_price: 85 },
  { id: 23, name: "(Chain Oracle): Seer predicting blockchain futures", category: "gaming", image: nft28, new_price: 60, old_price: 90 },
  { id: 24, name: "(Lunar Priestess): Mystic channeler of moonlight power", category: "gaming", image: w2, new_price: 180, old_price: 260 },

  // --- COLLECTIBLE (12 items) ---
  { id: 25, name: "(Galaxy Dragon): Cosmic beast soaring across stars", category: "collectible", image: nft5, new_price: 55, old_price: 80 },
  { id: 26, name: "(Golden Mask): Ancient relic hiding mystical secrets", category: "collectible", image: nft8, new_price: 35, old_price: 55 },
  { id: 27, name: "(Ethereal Wings): Angelic flight across endless skies", category: "collectible", image: nft12, new_price: 180, old_price: 250 },
  { id: 28, name: "(Quantum Relic): Timeless artifact bending reality", category: "collectible", image: nft20, new_price: 20, old_price: 35 },
  { id: 29, name: "(Crypto Phoenix): Reborn flame rising from ashes", category: "collectible", image: nft22, new_price: 150, old_price: 210 },
  { id: 30, name: "(Astral Key): Unlocking gateways to cosmic realms", category: "collectible", image: nft29, new_price: 40, old_price: 65 },
  { id: 31, name: "(Meta City): Futuristic hub of virtual life", category: "collectible", image: nft16, new_price: 130, old_price: 190 },
  { id: 32, name: "(Virtual Land): Digital territory shaping new worlds", category: "collectible", image: nft17, new_price: 50, old_price: 75 },
  { id: 33, name: "(Meta Horizon): Expanding frontier of virtual existence", category: "collectible", image: nft25, new_price: 175, old_price: 240 },
  { id: 34, name: "(Infinity Core): Endless energy powering metaverse worlds", category: "collectible", image: nft30, new_price: 200, old_price: 280 },
  { id: 35, name: "(Pix Punk): Bold rebel shaping pixelated art", category: "collectible", image: nft31, new_price: 95, old_price: 145 },
  { id: 36, name: "(Solar Valkyrie): Fierce warrior blazing through realms", category: "collectible", image: w3, new_price: 195, old_price: 280 },
];

export default all_products;
