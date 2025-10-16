import React from "react";
import "./Hero.css";
import Button from "../common/Button";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  onBookClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  onBookClick,
}) => {
  const heroStyle: React.CSSProperties = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div className="hero" style={heroStyle}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <Button
          label="Book Now"
          variant="primary"
          size="large"
          onClick={onBookClick}
        />
      </div>
    </div>
  );
};

export default Hero;
