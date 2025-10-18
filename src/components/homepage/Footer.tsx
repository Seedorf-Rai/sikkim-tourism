import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column footer-brand">
            <h3 className="footer-logo">Sikkim Tourism</h3>
            <p className="footer-description">
              Discover the enchanting beauty of Sikkim through authentic
              experiences and unforgettable adventures in the heart of the
              Himalayas.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                📘
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                🐦
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                📷
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#destinations">🏔️ Destinations</a>
              </li>
              <li>
                <a href="#culture">🎭 Culture</a>
              </li>
              <li>
                <a href="#activities">🎯 Activities</a>
              </li>
              <li>
                <a href="#travel-guide">📖 Travel Guide</a>
              </li>
              <li>
                <a href="#permits">📋 Permits</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Popular Places</h4>
            <ul className="footer-links">
              <li>
                <a href="#gangtok">🏙️ Gangtok</a>
              </li>
              <li>
                <a href="#nathula">🏔️ Nathula Pass</a>
              </li>
              <li>
                <a href="#yuksom">🥾 Yuksom</a>
              </li>
              <li>
                <a href="#pelling">🌄 Pelling</a>
              </li>
              <li>
                <a href="#lachung">🌸 Lachung</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📍</span>
                <span>Gangtok, Sikkim, India</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>info@sikkimtourism.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2024 Sikkim Tourism. All rights reserved. | Crafted with ❤️ for
            the Land of Mystical Beauty
          </p>
          <p className="footer-badge">⭐ Rated #1 Himalayan Destination</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
