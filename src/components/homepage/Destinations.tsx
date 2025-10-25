import { destinations } from "../../data/homepageData";
import "./Destinations.css";

const Destinations = () => {
  return (
    <section className="destinations-section" id="destinations">
      <div className="container">
        <div className="section-header">
          <span className="">🏔️ TOP DESTINATIONS</span>
          <h2 className="section-title">
            Majestic <span className="" style={{ color: '#7451A8' }}>Mountains</span>
            <br />
            Await Your Discovery
          </h2>
          <p className="section-subtitle">
            Explore breathtaking destinations that showcase the natural beauty
            and cultural richness of Sikkim's pristine Himalayan landscapes
          </p>
        </div>

        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="destination-image">
                <img src={destination.image} alt={destination.name} />
                <div className="destination-badge">
                  {destination.difficulty}
                </div>
              </div>

              <div className="destination-content">
                <h3 className="destination-name">{destination.name}</h3>
                <p className="destination-description">
                  {destination.description}
                </p>

                <div className="destination-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>{destination.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👥</span>
                    <span>{destination.suitableFor}</span>
                  </div>
                </div>

                <div className="destination-highlights">
                  {destination.highlights.map((highlight, index) => (
                    <span key={index} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>

                <a href={destination.link} className="destination-link">
                  Explore {destination.name}
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <button className="btn btn-outline btn-large">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
