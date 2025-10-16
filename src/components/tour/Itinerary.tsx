import React from "react";
import "./Itinerary.css";
import type { TourItinerary } from "../../types/tour";

interface ItineraryProps {
  itinerary: TourItinerary[];
}

const Itinerary: React.FC<ItineraryProps> = ({ itinerary }) => {
  return (
    <section className="itinerary-section">
      <h2>Tour Plan</h2>
      <div className="itinerary-container">
        {itinerary.map((item) => (
          <div key={`day-${item.day}`} className="itinerary-day">
            <div className="day-header">
              <div className="day-number">Day {item.day}</div>
              <h3 className="day-title">{item.title}</h3>
            </div>
            <ul className="activities-list">
              {item.activities.map((activity, idx) => (
                <li key={idx} className="activity-item">
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Itinerary;
