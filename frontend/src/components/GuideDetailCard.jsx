import React from 'react';
import './css/GuideDetailCard.css'; // Optional: Import CSS for styling

const GuideDetailCard = ({ name, location, phone, photo }) => {
  return (
    <div className="guide-card-container">
      <img src={photo} alt={`${name}'s photo`} className="guide-photo" />
      <div className="guide-info">
        <h3 className="guide-name">{name}</h3>
        <p className="guide-location">Location: {location}</p>
        <p className="guide-phone">Phone: {phone}</p>
      </div>
    </div>
  );
};

export default GuideDetailCard;