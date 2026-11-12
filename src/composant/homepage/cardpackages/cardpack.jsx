import React from 'react';
import './CardPack.css';
import photo from "../../../assets/main.jpg"
import photoo from "../../../assets/malta.jpg"

const packageData = [
  {
    id: 1,
    title: 'BIKE / RICKSHAW',
    price: '10',
    image: photo,
    features: [
      { icon: '📅', text: 'Your bike for a day' },
      { icon: '📱', text: 'City App' },
      { icon: '🎟️', text: 'Discount on Rickshaw' },
      { icon: '🎧', text: 'Guaranteed Support' },
    ],
  },
  {
    id: 2,
    title: 'BIKE TOURS',
    price: '30',
    image: photo,
    features: [
      { icon: '🚵', text: 'A Mountain Bike Included' },
      { icon: '🙋', text: 'A Guide For You' },
      { icon: '💧', text: 'Bottle of water' },
      { icon: '🎧', text: 'Guaranteed Support' },
    ],
  },
  {
    id: 3,
    title: 'BUS TRIPS',
    price: '45',
    image: photo,
    features: [
      { icon: '🎫', text: 'Park ticket' },
      { icon: '🚌', text: 'Return bus' },
      { icon: '👨‍👩‍👧‍👦', text: 'Companion' },
      { icon: '🎧', text: 'Guaranteed Support' },
    ],
  },
  {
    id: 4,
    title: 'TRANSFER',
    price: '10',
    image: photoo,
    features: [
      { icon: '🤵', text: 'Personal Driver' },
      { icon: '📍', text: 'Wherever You Want' },
      { icon: '💰', text: 'At the best price' },
      { icon: '🎧', text: 'Guaranteed Support' },
    ],
  },
];

const CardPack = () => {
  return (
    <div className="card-pack-container">
      <h2 className="card-pack-header">The Most Popular Packages</h2>
      
      <div className="card-grids">
        {packageData.map((pkg) => (
          <div key={pkg.id} className="pricing-card">
            <div className="card-image-container">
              <img src={pkg.image} alt={pkg.title} className="card-image" />
            </div>
            
            <div className="card-content">
              <h3 className="card-title">{pkg.title}</h3>
              
              <div className="card-price">
                <span className="currency">€</span>
                <span className="amount">{pkg.price}</span>
                <span className="period">/day</span>
              </div>
              
              <ul className="feature-list">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-icon">{feature.icon}</span>
                    <span className="feature-text">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPack;