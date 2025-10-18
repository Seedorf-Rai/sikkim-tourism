import { cultureItems } from "../../data/homepageData";
import "./Culture.css";

const Culture = () => {
  return (
    <section className="culture-section" id="culture">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🎭 Rich Heritage</span>
          <h2 className="section-title">
            Cultural<span className="highlight">Treasures of Sikkim</span>
          </h2>
          <p className="section-subtitle">
            Experience the tranquility of nature and the warmth of our culture
            through centuries-old traditions and spiritual practices
          </p>
        </div>

        <div className="culture-grid">
          {cultureItems.map((item) => (
            <div key={item.id} className="culture-card">
              <div className="culture-image">
                <img src={item.image} alt={item.title} />
                <div className="culture-overlay">
                  <span className="culture-icon">{item.icon}</span>
                </div>
              </div>

              <div className="culture-content">
                <h3 className="culture-title">{item.title}</h3>
                <p className="culture-description">{item.description}</p>
                <button className="culture-link">
                  Explore Culture
                  <span className="link-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="culture-quote">
          <blockquote>
            "In Sikkim, every prayer flag carries a wish, every monastery holds
            a story, and every festival celebrates the harmony between nature
            and humanity."
            <cite>— Ancient Sikkimese Wisdom</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Culture;
