import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🏔️</span>
          <span className="logo-text">Sikkim Tourism</span>
        </Link>

        <ul className="nav-menu">
          <li>
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/tour/nathula-sharing-tour"
              className={`nav-link ${
                location.pathname === "/tour/nathula-sharing-tour"
                  ? "active"
                  : ""
              }`}
            >
              Nathula Tour
            </Link>
          </li>
          <li>
            <a href="#destinations" className="nav-link">
              Destinations
            </a>
          </li>
          <li>
            <a href="#activities" className="nav-link">
              Activities
            </a>
          </li>
          <li>
            <a href="#culture" className="nav-link">
              Culture
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="btn btn-primary btn-small">Book Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
