import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="homepage">
      <div className="homepage-contaienr">
        <button className="btn" onClick={handleDashboardClick}>
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Homepage;
