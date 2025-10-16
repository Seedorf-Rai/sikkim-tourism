import React from "react";
import "./TourInfo.css";
import Card from "../common/Card";

interface TourInfoProps {
  price?: number | string;
  duration: string;
  type: string;
  rating: number;
  reviewCount: number;
}

const TourInfo: React.FC<TourInfoProps> = ({
  price,
  duration,
  type,
  rating,
  reviewCount,
}) => {
  return (
    <div className="tour-info">
      <div className="info-grid">
        {price && (
          <Card>
            <div className="info-item">
              <div className="info-label">From</div>
              <div className="info-value">
                {typeof price === "number" ? `₹ ${price}` : price}
              </div>
            </div>
          </Card>
        )}
        <Card>
          <div className="info-item">
            <div className="info-label">Duration</div>
            <div className="info-value">{duration}</div>
          </div>
        </Card>
        <Card>
          <div className="info-item">
            <div className="info-label">Tour Type</div>
            <div className="info-value">{type}</div>
          </div>
        </Card>
        <Card>
          <div className="info-item">
            <div className="info-label">Rating</div>
            <div className="info-value">
              {rating}/5 ({reviewCount}{" "}
              {reviewCount === 1 ? "review" : "reviews"})
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TourInfo;
