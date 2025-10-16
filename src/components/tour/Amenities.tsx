import React from "react";
import "./Amenities.css";
import type { Amenity } from "../../types/tour";

interface AmenitiesProps {
  amenities: Amenity[];
}

const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  const included = amenities.filter((a) => a.included);
  const excluded = amenities.filter((a) => !a.included);

  return (
    <section className="amenities-section">
      <h2>Amenities</h2>
      <div className="amenities-grid">
        {included.length > 0 && (
          <div className="amenity-group">
            <h3 className="group-title included-title">✓ Included</h3>
            <ul className="amenity-list">
              {included.map((amenity) => (
                <li key={amenity.id} className="amenity-item included">
                  <span className="checkmark">✓</span>
                  <span>{amenity.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {excluded.length > 0 && (
          <div className="amenity-group">
            <h3 className="group-title excluded-title">✗ Not Included</h3>
            <ul className="amenity-list">
              {excluded.map((amenity) => (
                <li key={amenity.id} className="amenity-item excluded">
                  <span className="cross">✗</span>
                  <span>{amenity.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Amenities;
