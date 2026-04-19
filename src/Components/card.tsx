import "./card.css";
import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";
import photo6 from "../assets/photo6.jpeg";

const Card = () => {
  return (
    <div className="text-center mt-8">
      <h2 className="text-3xl font-bold">Discover</h2>
      <p className="text-xl mt-4">Featured Destinations</p>
      <div className="card-page">
        <div className="card-grid">
          <div className="card-card">
            <div className="card-image">
              <img src={photo1} alt="photo1" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Scottish Highlands</h3>
              <p className="card-description">Glenfinnan Viaduct</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={photo2} alt="photo2" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Scottish Highlands</h3>
              <p className="card-description">Glenfinnan Viaduct</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={photo3} alt="photo3" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Scottish Highlands</h3>
              <p className="card-description">Glenfinnan Viaduct</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={photo4} alt="photo3" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Scottish Highlands</h3>
              <p className="card-description">Glenfinnan Viaduct</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={photo5} alt="photo5" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Scottish Highlands</h3>
              <p className="card-description">Glenfinnan Viaduct</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={photo6} alt="photo6" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Scottish Highlands</h3>
              <p className="card-description">Glenfinnan Viaduct</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
