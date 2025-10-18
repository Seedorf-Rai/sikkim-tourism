import "./HomeHero.css";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">✨ HIMALAYAN PARADISE AWAITS</div>

        <h1 className="hero-title">
          Discover the<span className="highlight">Magic of Sikkim</span>
        </h1>

        <p className="hero-subtitle">
          Journey through pristine valleys, ancient monasteries, and snow-capped
          peaks in India's most enchanting Himalayan state
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary btn-large">
            Start Your Adventure
            <span className="btn-icon">→</span>
          </button>
          <button className="btn btn-secondary btn-large">
            <span className="play-icon">▶</span>
            Watch Journey
          </button>
        </div>

        <div className="hero-features">
          <div className="feature-item">
            <span className="feature-icon">🏔️</span>
            <span className="feature-text">Himalayan Peaks</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💧</span>
            <span className="feature-text">Sacred Rivers</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🌲</span>
            <span className="feature-text">Ancient Forests</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse"></div>
        <span>Scroll to Explore</span>
      </div>
    </section>
  );
};

export default HomeHero;
