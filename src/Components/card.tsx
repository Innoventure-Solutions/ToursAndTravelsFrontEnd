import "./card.css";
const Card = () => {
  return (
    <div className="card-page">
      <div className="card-grid">
        <div className="card-card">
          <div className="card-image">
            <img alt="../assets/photo1.jpeg" className="photo1" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Scottish Highlands</h3>
            <p className="card-description">Glenfinnan Viaduct</p>
            <button className="card-btn">Read More...</button>
          </div>
        </div>

        <div className="card-card">
          <div className="card-image">
            <img alt="../assets/photo2.jpeg" className="photo2" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Scottish Highlands</h3>
            <p className="card-description">Glenfinnan Viaduct</p>
            <button className="card-btn">Read More...</button>
          </div>
        </div>

        <div className="card-card">
          <div className="card-image">
            <img alt="../assets/photo3.jpeg" className="photo3" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Scottish Highlands</h3>
            <p className="card-description">Glenfinnan Viaduct</p>
            <button className="card-btn">Read More...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
