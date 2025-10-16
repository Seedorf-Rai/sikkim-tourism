import React from "react";
import "./Reviews.css";
import type { Review } from "../../types/tour";

interface ReviewsProps {
  reviews: Review[];
  averageRating?: number;
}

const Reviews: React.FC<ReviewsProps> = ({ reviews, averageRating = 5.0 }) => {
  const renderStars = (rating: number) => {
    return (
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={`star ${star <= rating ? "filled" : ""}`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="reviews-section">
      <h2>Guest Reviews</h2>

      {reviews.length > 0 && (
        <>
          <div className="rating-summary">
            <div className="average-rating">
              <div className="rating-number">{averageRating.toFixed(2)}</div>
              <div className="rating-stars">{renderStars(averageRating)}</div>
              <div className="rating-count">
                Based on {reviews.length} review(s)
              </div>
            </div>
          </div>

          <div className="reviews-list">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div>
                    <h4 className="reviewer-name">{review.author}</h4>
                    <p className="review-date">{review.date}</p>
                  </div>
                  {renderStars(review.rating)}
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {reviews.length === 0 && (
        <p className="no-reviews">
          No reviews yet. Be the first to review this tour!
        </p>
      )}
    </section>
  );
};

export default Reviews;
