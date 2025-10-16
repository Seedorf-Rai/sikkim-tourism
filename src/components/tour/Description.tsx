import React from "react";
import "./Description.css";

interface DescriptionProps {
  description: string;
  inclusions?: string[];
  exclusions?: string[];
  requirements?: string[];
}

const Description: React.FC<DescriptionProps> = ({
  description,
  inclusions,
  exclusions,
  requirements,
}) => {
  return (
    <section className="description-section">
      <div className="description-intro">
        <h2>About This Tour</h2>
        <p>{description}</p>
      </div>

      <div className="description-grid">
        {inclusions && inclusions.length > 0 && (
          <div className="info-box">
            <h3>What's Included</h3>
            <ul>
              {inclusions.map((item, idx) => (
                <li key={idx}>
                  <span className="check">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {exclusions && exclusions.length > 0 && (
          <div className="info-box">
            <h3>What's Not Included</h3>
            <ul>
              {exclusions.map((item, idx) => (
                <li key={idx}>
                  <span className="cross">✗</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {requirements && requirements.length > 0 && (
          <div className="info-box">
            <h3>What to Bring</h3>
            <ul>
              {requirements.map((item, idx) => (
                <li key={idx}>
                  <span className="bullet">→</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Description;
