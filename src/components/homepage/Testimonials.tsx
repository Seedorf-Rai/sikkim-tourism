import { testimonials } from "../../data/homepageData";
import "./Testimonials.css";

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">💬 Traveler Stories</span>
          <h2 className="section-title">
            What <span className="" style={{ marginLeft: '10px' }}>Our Travelers Say</span>
          </h2>
          <p className="section-subtitle">
            Real experiences from travelers who discovered the magic of Sikkim
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-location">
                    📍 {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>

              <p className="testimonial-experience">
                <span className="experience-badge">
                  {testimonial.experience}
                </span>
              </p>

              <p className="testimonial-comment">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
