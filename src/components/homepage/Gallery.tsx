import { useState } from "react";
import { galleryImages } from "../../data/homepageData";
import "./Gallery.css";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<
    "All Photos" | "Landscapes" | "Culture" | "Wildlife" | "Adventure"
  >("All Photos");

  const categories: (
    | "All Photos"
    | "Landscapes"
    | "Culture"
    | "Wildlife"
    | "Adventure"
  )[] = ["All Photos", "Landscapes", "Culture", "Wildlife", "Adventure"];

  const filteredImages =
    activeCategory === "All Photos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">📸 Visual Journey</span>
          <h2 className="section-title">
            Sikkim Through<span className="highlight">Our Lens</span>
          </h2>
          <p className="section-subtitle">
            Immerse yourself in the breathtaking beauty of Sikkim through our
            curated photo gallery
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="gallery-image">
                <img src={image.image} alt={image.title} />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{image.title}</h3>
                  <p className="gallery-location">📍 {image.location}</p>
                  <div className="gallery-stats">
                    <span className="stat">
                      <span className="stat-icon">❤️</span>
                      {image.likes}
                    </span>
                    <span className="stat">
                      <span className="stat-icon">👁️</span>
                      {image.views}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <button className="btn btn-outline btn-large">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
