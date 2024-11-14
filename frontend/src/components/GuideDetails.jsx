import React from 'react';
import "./css/GuideDetails.css"
import GuideDetailCard from './GuideDetailCard'; // Adjust the path as necessary

const GuideDetails = () => {
  // Sample data for the tour guide
  const tourGuides = [
    {
      name: 'John Doe',
      location: 'New York, USA',
      phone: '+1 234 567 890',
      photo: 'https://via.placeholder.com/300', // Replace with an actual image URL
    },
    {
      name: 'Jane Smith',
      location: 'London, UK',
      phone: '+44 123 456 789',
      photo: 'https://via.placeholder.com/300', // Replace with an actual image URL
    },
    // Add more tour guides as needed
  ];

  return (
    <div className='guide-details-container'>
      <h2>Available Guides</h2>
      <div className="guide-details-list">
        {tourGuides.map((guide, index) => (
          <GuideDetailCard
            key={index}
            name={guide.name}
            location={guide.location}
            phone={guide.phone}
            photo={guide.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default GuideDetails;