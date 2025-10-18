import { activities } from "../../data/homepageData";
import "./Activities.css";

const Activities = () => {
  return (
    <section className="activities-section" id="activities">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🎯 Adventures Await</span>
          <h2 className="section-title">
            Thrilling<span className="highlight">Activities</span>
          </h2>
          <p className="section-subtitle">
            From adrenaline-pumping adventures to peaceful cultural experiences,
            Sikkim offers something for every traveler
          </p>
        </div>

        <div className="activities-grid">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-card">
              <div className="activity-image">
                <img src={activity.image} alt={activity.name} />
                <div className="activity-difficulty">{activity.difficulty}</div>
              </div>

              <div className="activity-content">
                <h3 className="activity-name">{activity.name}</h3>
                <p className="activity-description">{activity.description}</p>

                <button className="btn btn-primary btn-small">
                  {activity.actionLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
