import React, { useState } from 'react';
import GuideDetails from '../components/GuideDetails'; // Adjust the path as necessary
import TouristDetails from '../components/TouristDetails'; // Adjust the path as necessary
import "./css/Dashboard.css";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null); // State to track active component

  const handleGuideClick = () => {
    setActiveComponent('guide');
  };

  const handleTouristClick = () => {
    setActiveComponent('tourist');
  };

  return (
    <div className='dashboard-container'>
      <div className="guide-details-container" onClick={handleGuideClick}>
        Guide Details
      </div>
      <div className="tourist-details-container" onClick={handleTouristClick}>
        Tourist Details
      </div>

      <div className="content">
        {activeComponent === 'guide' && <GuideDetails />}
        {activeComponent === 'tourist' && <TouristDetails />}
      </div>
    </div>
  );
}

export default Dashboard;