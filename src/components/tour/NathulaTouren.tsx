import React from "react";
import "./NathulaTouren.css";
import Hero from "./Hero";
import TourInfo from "./TourInfo";
import Description from "./Description";
import Itinerary from "./Itinerary";
import Amenities from "./Amenities";
import FAQAccordion from "./FAQAccordion";
import Reviews from "./Reviews";
import Button from "../common/Button";
import ChatBot from "../common/ChatBot";
import { nathulaShareingTourData } from "../../data/nathulaToursData";

const NathulaTouren: React.FC = () => {
  const tour = nathulaShareingTourData;

  const handleBooking = () => {
    alert("Booking functionality - integrate with your booking system");
  };

  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/916295198565?text=Hi%20I%20am%20interested%20in%20Nathula%20Tour",
      "_blank"
    );
  };

  return (
    <div className="nathula-tour-page">
      <Hero
        title={tour.title}
        subtitle="Explore the Indo-China border with stunning Himalayan views"
        onBookClick={handleBooking}
      />

      <div className="container">
        <TourInfo
          price="Contact for pricing"
          duration={tour.duration}
          type={tour.type}
          rating={tour.rating}
          reviewCount={tour.reviewCount}
        />

        <Description
          description={tour.description}
          inclusions={tour.inclusions}
          exclusions={tour.exclusions}
          requirements={tour.requirements}
        />

        <Itinerary itinerary={tour.itinerary} />

        <Amenities amenities={tour.amenities} />

        <FAQAccordion faqs={tour.faqs} />

        <Reviews reviews={tour.reviews} averageRating={tour.rating} />

        <section className="cta-section">
          <h2>Ready to Book Your Nathula Adventure?</h2>
          <p>Contact us today to reserve your spot on this amazing tour</p>
          <div className="cta-buttons">
            <Button
              label="Book Now"
              variant="primary"
              size="large"
              onClick={handleBooking}
            />
            <Button
              label="Contact via WhatsApp"
              variant="secondary"
              size="large"
              onClick={handleWhatsAppContact}
            />
          </div>
        </section>
      </div>

      <footer className="tour-footer">
        <div className="footer-content">
          <h3>Contact Information</h3>
          <p>Phone: (+91) 6295 198 565</p>
          <p>Email: hello@sikkimdiaries.com</p>
          <p>Address: Yuksom Bazar, West Sikkim</p>
          <p className="copyright">
            © 2024 Sikkim Diaries. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default NathulaTouren;
