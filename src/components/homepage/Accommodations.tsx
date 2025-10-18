import { accommodations } from "../../data/homepageData";
import "./Accommodations.css";

const Accommodations = () => {
  return (
    <section className="accommodations-section" id="accommodations">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🏨 Stay in Comfort</span>
          <h2 className="section-title">
            Perfect<span className="highlight">Accommodations</span>
          </h2>
          <p className="section-subtitle">
            From luxury resorts to cozy homestays, find the perfect place to
            rest after your Himalayan adventures
          </p>
        </div>

        <div className="accommodations-grid">
          {accommodations.map((accommodation) => (
            <div key={accommodation.id} className="accommodation-card">
              <div className="accommodation-image">
                <img src={accommodation.image} alt={accommodation.name} />
                <div className="accommodation-type">{accommodation.type}</div>
              </div>

              <div className="accommodation-content">
                <div className="accommodation-header">
                  <div>
                    <h3 className="accommodation-name">{accommodation.name}</h3>
                    <p className="accommodation-location">
                      📍 {accommodation.location}
                    </p>
                  </div>
                  <div className="accommodation-rating">
                    <span className="rating-icon">⭐</span>
                    <span className="rating-value">{accommodation.rating}</span>
                  </div>
                </div>

                <p className="accommodation-description">
                  {accommodation.description}
                </p>

                <div className="amenities-section">
                  <h4 className="amenities-title">Amenities:</h4>
                  <div className="amenities-list">
                    {accommodation.amenities.map((amenity, index) => (
                      <span key={index} className="amenity-tag">
                        ✓ {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="accommodation-footer">
                  <div className="price">
                    <span className="price-amount">
                      ₹{accommodation.pricePerNight.toLocaleString()}
                    </span>
                    <span className="price-period">/night</span>
                  </div>
                  <button className="btn btn-primary btn-small">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
