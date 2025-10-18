import {
  travelTips,
  emergencyContacts,
  localEtiquette,
} from "../../data/homepageData";
import "./TravelTips.css";

const TravelTips = () => {
  return (
    <section className="travel-tips-section" id="travel-guide">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">💡 Essential Tips</span>
          <h2 className="section-title">
            Travel Smart in<span className="highlight">Sikkim</span>
          </h2>
          <p className="section-subtitle">
            Essential information to make your Sikkim journey smooth, safe, and
            unforgettable
          </p>
        </div>

        <div className="tips-grid">
          {travelTips.map((tip) => (
            <div key={tip.id} className="tip-card">
              <div className="tip-icon">{tip.icon}</div>
              <h3 className="tip-title">{tip.title}</h3>
              <p className="tip-description">{tip.description}</p>
            </div>
          ))}
        </div>

        <div className="additional-info">
          <div className="emergency-contacts">
            <h3 className="info-title">Emergency Contacts</h3>
            <div className="contacts-grid">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-service">{contact.service}</span>
                  <span className="contact-number">{contact.number}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="local-etiquette">
            <h3 className="info-title">Local Etiquette</h3>
            <ul className="etiquette-list">
              {localEtiquette.map((rule, index) => (
                <li key={index} className="etiquette-item">
                  <span className="check-icon">✓</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
